using Microsoft.Extensions.Configuration;
using Moq;
using TransactionSorterBackend.Domain;
using Xunit;

namespace TransactionSorterBackend.Test;

public class YnabClientTests
{
    [Fact]
    public void CanCreate()
    {
        var mockConfiguration = new Mock<IConfiguration>();
        var mockTransactionClient = new Mock<ITransactionClient>();
        var mockUriBuilder = new Mock<IUriBuilder>();
        var result = new YnabClient(mockConfiguration.Object, mockTransactionClient.Object, mockUriBuilder.Object);
        Assert.NotNull(result);
    }
}
