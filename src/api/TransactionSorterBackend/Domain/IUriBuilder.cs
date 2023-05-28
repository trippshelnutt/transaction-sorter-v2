namespace TransactionSorterBackend.Domain;

public interface IUriBuilder
{
    Uri BuildRequestUriForCategory(string categoryId, DateTime startDate);
    Uri BuildRequestUriForTransaction(string transactionId);
}
