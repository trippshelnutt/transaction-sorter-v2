using Microsoft.Extensions.Logging;
using Moq;
using TransactionSorterBackend.Controllers;
using Xunit;
using System.Linq;

namespace TransactionSorterBackend.Test;

public class TransactionsControllerTests
{
    private readonly TransactionsController _sut;

    public TransactionsControllerTests()
    {
        var mockLogger = new Mock<ILogger<TransactionsController>>();

        _sut = new TransactionsController(mockLogger.Object);
    }

    [Fact]
    public void ExampleDataReturns5Values()
    {
        var result = _sut.GetTransactions(2022, 12, "budget");
    
        Assert.NotNull(result);
        Assert.Equal(5, result.Count());
    }
}
