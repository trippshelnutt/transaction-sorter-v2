using Amazon;
using Amazon.SecretsManager;
using Amazon.SecretsManager.Model;
using System.Text.Json;

namespace TransactionSorterBackend.Secrets;

public class AwsSecretsConfigurationProvider : ConfigurationProvider
{
    public override void Load()
    {
        const string secretName = "ts/prod/ynab/apikey";
        const string region = "us-east-1";

        var client = new AmazonSecretsManagerClient(RegionEndpoint.GetBySystemName(region));

        LoadSecret(client, secretName);
    }

    private void LoadSecret(IAmazonSecretsManager client, string secretName)
    {
        var request = new GetSecretValueRequest
        {
            SecretId = secretName,
            VersionStage = "AWSCURRENT" // VersionStage defaults to AWSCURRENT if unspecified.
        };

        var response = client.GetSecretValueAsync(request).Result;
        var secretDictionary = JsonSerializer.Deserialize<Dictionary<string, string>>(response.SecretString);

        if (secretDictionary != null)
        {
            foreach (var secret in secretDictionary)
            {
                Data.Add(secret.Key, secret.Value);
            }
        }
    }
}
