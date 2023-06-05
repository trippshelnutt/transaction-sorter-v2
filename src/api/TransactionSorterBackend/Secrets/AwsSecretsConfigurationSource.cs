namespace TransactionSorterBackend.Secrets;

public class AwsSecretsConfigurationSource : IConfigurationSource
{
    public IConfigurationProvider Build(IConfigurationBuilder builder)
    {
        return new AwsSecretsConfigurationProvider();
    }
}
