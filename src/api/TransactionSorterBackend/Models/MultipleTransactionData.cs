using System.Text.Json.Serialization;

namespace TransactionSorterBackend.Models;

public class MultipleTransactionData
{
    [JsonPropertyName("data")]
    public List<TransactionModel> Transactions { get; set; } = new();
}
