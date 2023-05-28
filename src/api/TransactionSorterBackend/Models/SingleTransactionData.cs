using System.Text.Json.Serialization;

namespace TransactionSorterBackend.Models;

public class SingleTransactionData
{
    [JsonPropertyName("data")]
    public TransactionModel Transaction { get; set; } = new();
}
