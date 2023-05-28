using Microsoft.Extensions.Configuration;
using Moq;
using System;
using TransactionSorterBackend.Domain;
using Xunit;

namespace TransactionSorterBackend.Test;

public class RequestUriBuilderTests
{
    private const string YnabUrl = "https://ynaburl";
    private const string YnabUrlConfigurationKey = "YNAB:URL";
    private const string YnabBudget = "YNABBUDGET";
    private const string YnabBudgetConfigurationKey = "YNAB:Budget";

    [Fact]
    public void BuildRequestUriForCategoryReturnsExpectedValue()
    {
        const string categoryId = "CATEGORY";
        var startDate = DateTime.Now;
        var sinceDateString = startDate.ToString("yyyy-M-dd");
        var expectedValue = $"{YnabUrl}/budgets/{YnabBudget}/categories/{categoryId}/transactions?since_date={sinceDateString}";
        var sut = CreateSut();

        var result = sut.BuildRequestUriForCategory(categoryId, startDate);

        Assert.Equal(expectedValue, result.ToString());
    }

    [Fact]
    public void BuildRequestUriForTransactionReturnsExpectedValue()
    {
        const string transactionId = "TRANSACTION";
        const string expectedValue = $"{YnabUrl}/budgets/{YnabBudget}/transactions/{transactionId}";

        var sut = CreateSut();

        var result = sut.BuildRequestUriForTransaction(transactionId);

        Assert.Equal(expectedValue, result.ToString());
    }

    private static IRequestUriBuilder CreateSut()
    {
        var mockConfiguration = new Mock<IConfiguration>();
        mockConfiguration.Setup(c => c[YnabUrlConfigurationKey]).Returns(YnabUrl);
        mockConfiguration.Setup(c => c[YnabBudgetConfigurationKey]).Returns(YnabBudget);

        return new RequestUriBuilder(mockConfiguration.Object);
    }
}
