namespace TransactionSorterBackend.Secrets;

public static class AwsSecretsConfigurationExtensions
{
    public static IConfigurationBuilder AddAwsSecretsProvider(this IConfigurationBuilder builder)
    {
        return builder.Add(new AwsSecretsConfigurationSource());
    }
}
