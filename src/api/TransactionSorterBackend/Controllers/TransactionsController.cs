using Microsoft.AspNetCore.Mvc;

namespace TransactionSorterBackend.Controllers;

[ApiController]
public class TransactionsController : ControllerBase
{
    private readonly ILogger<TransactionsController> _logger;

    public TransactionsController(ILogger<TransactionsController> logger)
    {
        _logger = logger;
    }

    [HttpGet("/api/[controller]/{category}/{year}/{month}")]
    public IEnumerable<TransactionModel> GetTransactions(int year, int month, string category)
    {
        return new[]
        {
            new TransactionModel
            {
                MilliunitAmount = 12340,
                Date = new DateTime(year, month, 1),
                ParentTransactionId = "12340"
            },
            new TransactionModel
            {
                MilliunitAmount = 123450,
                Date = new DateTime(year, month, 2),
                ParentTransactionId = "123450"
            },
            new TransactionModel
            {

                MilliunitAmount = 1234560,
                Date = new DateTime(year, month, 3),
                ParentTransactionId = "1234560"
            },
            new TransactionModel
            {

                MilliunitAmount = 12345670,
                Date = new DateTime(year, month, 4),
                ParentTransactionId = "12345670"
            },
            new TransactionModel
            {
                MilliunitAmount = 123456780,
                Date = new DateTime(year, month, 5),
                ParentTransactionId = "123456780"
            }
        };
    }
}
