using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using TransactionSorterBackend.Controllers;
using TransactionSorterBackend.Domain;
using TransactionSorterBackend.Models;
using Xunit;

namespace TransactionSorterBackend.Test;

public class TransactionsControllerTests
{
    private const int Year = 2023;
    private const int Month = 5;
    private const string Category = "YnabCategory";

    [Fact]
    public async void ExampleDataReturnsCorrectValues()
    {
        var expectedTransactions = GetTransactions();
        var sut = CreateSut(expectedTransactions);

        var result = await sut.GetTransactions(Year, Month, Category);

        Assert.NotNull(result);
        Assert.Equal(expectedTransactions, result);
    }

    private static List<TransactionModel> GetTransactions()
    {
        return new List<TransactionModel>
        {
            new()
            {
                MilliunitAmount = 12340,
                Date = new DateTime(Year, Month, 1),
                Payee = "First",
                ParentTransactionId = "12340"
            },
            new()
            {
                MilliunitAmount = 123450,
                Date = new DateTime(Year, Month, 2),
                Payee = "Second",
                ParentTransactionId = "123450"
            },
            new()
            {

                MilliunitAmount = 1234560,
                Date = new DateTime(Year, Month, 3),
                Payee = "Third",
                ParentTransactionId = "1234560"
            },
            new()
            {

                MilliunitAmount = 12345670,
                Date = new DateTime(Year, Month, 4),
                Payee = "Fourth",
                ParentTransactionId = "12345670"
            },
            new()
            {
                MilliunitAmount = 123456780,
                Date = new DateTime(Year, Month, 5),
                Payee = "Fifth",
                ParentTransactionId = "123456780"
            }
        };
    }

    private static TransactionsController CreateSut(List<TransactionModel> transactions)
    {
        var startDate = new DateTime(Year, Month, 1);
        var endDate = startDate.AddMonths(1).AddDays(-1);

        var mockLogger = new Mock<ILogger<TransactionsController>>();
        var mockTransactionClient = new Mock<IYnabClient>();
        mockTransactionClient
            .Setup(c => c.GetTransactionsAsync(startDate, endDate, Category))
            .ReturnsAsync(transactions);

        return new TransactionsController(mockLogger.Object, mockTransactionClient.Object);
    }
}
