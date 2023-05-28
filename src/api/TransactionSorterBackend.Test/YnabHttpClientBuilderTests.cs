using Microsoft.Extensions.Configuration;
using Moq;
using System.Linq;
using TransactionSorterBackend.Domain;
using Xunit;

namespace TransactionSorterBackend.Test;

public class YnabHttpClientBuilderTests
{
    private const string YnabApiKey = "YNABAPIKEY";
    private const string YnabApiKeyConfigurationKey = "YNAB:apiKey";

    [Fact]
    public void RequestHeadersAcceptJson()
    {
        var sut = CreateSut();

        var result = sut.BuildHttpClient();

        Assert.Contains(result.DefaultRequestHeaders.Accept, a => a.MediaType == "application/json");
    }

    [Fact]
    public void RequestHeadersHaveAuthorization()
    {
        var sut = CreateSut();

        var result = sut.BuildHttpClient();

        Assert.Contains(result.DefaultRequestHeaders, h => h.Key == "Authorization" && h.Value.First() == $"BEARER {YnabApiKey}");
    }

    private IYnabHttpClientBuilder CreateSut()
    {
        var mockConfiguration = new Mock<IConfiguration>();
        mockConfiguration.Setup(c => c[YnabApiKeyConfigurationKey]).Returns(YnabApiKey);
        var result = new YnabHttpClientBuilder(mockConfiguration.Object);
        return result;
    }
}
