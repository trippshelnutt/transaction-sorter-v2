using System.Text.Json.Serialization;

namespace TransactionSorterBackend;

public class TransactionModel
{
    [JsonPropertyName("amount")]
    public int MilliunitAmount { get; set; } = 0;

    [JsonPropertyName("payee_name")]
    public string Payee { get; set; } = string.Empty;

    [JsonPropertyName("parent_transaction_id")]
    public string ParentTransactionId { get; set; } = string.Empty;

    [JsonPropertyName("date")]
    public DateTime Date { get; set; } = new DateTime();

    public decimal DecimalAmount
    {
        get
        {
            return ((decimal)MilliunitAmount / 1000.00m);
        }
    }

    public string DisplayAmount
    {
        get
        {
            return $"{DecimalAmount:.00}";
        }
    }
}
