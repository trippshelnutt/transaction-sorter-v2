using TransactionSorterBackend.Models;

namespace TransactionSorterBackend.Domain;

public class TransactionClient : ITransactionClient
{
    private readonly IHttpClientBuilder _httpClientBuilder;

    public TransactionClient(IHttpClientBuilder httpClientBuilder)
    {
        _httpClientBuilder = httpClientBuilder;
    }

    public async Task<GetTransactionsResponse> GetTransactionsAsync(Uri requestUri)
    {
        using var httpClient = _httpClientBuilder.BuildHttpClient();

        var response = await httpClient.GetFromJsonAsync<GetTransactionsResponse>(requestUri);

        return response ?? new GetTransactionsResponse();
    }

    public async Task<GetTransactionResponse> GetTransactionAsync(Uri requestUri)
    {
        using var httpClient = _httpClientBuilder.BuildHttpClient();

        var response = await httpClient.GetFromJsonAsync<GetTransactionResponse>(requestUri);

        return response ?? new GetTransactionResponse();
    }
}
