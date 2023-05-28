namespace TransactionSorterBackend.Domain;

public interface IHttpClientBuilder
{
    HttpClient BuildHttpClient();
}
