using TransactionSorterBackend.Models;
using Xunit;

namespace TransactionSorterBackend.Test;

public class TransactionModelTests
{
    [Theory]
    [InlineData(12340, "12.34")]
    [InlineData(123450, "123.45")]
    [InlineData(1234560, "1234.56")]
    public void DecimalAmountIsCorrect(int value, string expected)
    {
        var model = new TransactionModel
        {
            MilliunitAmount = value
        };

        Assert.Equal(decimal.Parse(expected), model.DecimalAmount);
    }

    [Theory]
    [InlineData(12340, "12.34")]
    [InlineData(123450, "123.45")]
    [InlineData(1234560, "1234.56")]
    public void DisplayAmountIsCorrect(int value, string expected)
    {
        var model = new TransactionModel
        {
            MilliunitAmount = value
        };

        Assert.Equal(expected, model.DisplayAmount);
    }
}
