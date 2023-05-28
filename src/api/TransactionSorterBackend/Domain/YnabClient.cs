using TransactionSorterBackend.Models;

namespace TransactionSorterBackend.Domain;

public class YnabClient : IYnabClient
{
    private readonly IConfiguration _configuration;
    private readonly ITransactionClient _transactionClient;
    private readonly IUriBuilder _uriBuilder;

    public YnabClient(IConfiguration configuration, ITransactionClient transactionClient, IUriBuilder uriBuilder)
    {
        _configuration = configuration;
        _transactionClient = transactionClient;
        _uriBuilder = uriBuilder;
    }

    public async Task<List<TransactionModel>> GetTransactionsAsync(DateTime startDate, DateTime endDate, string category)
    {
        var categorySetting = $"YNAB:{category}";
        var categoryId = _configuration[categorySetting];
        var requestUri = _uriBuilder.BuildRequestUriForCategory(categoryId, startDate);
        var response = await _transactionClient.GetTransactionsAsync(requestUri);

        var transactionTasks = response.Data.Transactions
            .OrderByDescending(t => t.MilliunitAmount)
            .Select(CheckAndFillParentInformation);

        var transactions = await Task.WhenAll(transactionTasks);

        return transactions.ToList();
    }

    private async Task<TransactionModel> GetTransactionAsync(string transactionId)
    {
        var requestUri = _uriBuilder.BuildRequestUriForTransaction(transactionId);
        var response = await _transactionClient.GetTransactionAsync(requestUri);

        return response.Data.Transaction;
    }

    private async Task<TransactionModel> CheckAndFillParentInformation(TransactionModel transaction)
    {
        if (string.IsNullOrEmpty(transaction.Payee))
        {
            return await FillParentInformation(transaction);
        }

        return transaction;
    }

    private async Task<TransactionModel> FillParentInformation(TransactionModel transaction)
    {
        var parentTransaction = await GetTransactionAsync(transaction.ParentTransactionId);
        transaction.Payee = parentTransaction.Payee;
        return transaction;
    }
}
