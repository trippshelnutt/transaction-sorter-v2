using TransactionSorterBackend.Domain;
using TransactionSorterBackend.Secrets;

const string TransactionSorterSpecificOrigins = "TransactionSorterSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsProduction())
{
    builder.Configuration.AddAwsSecretsProvider();
}

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: TransactionSorterSpecificOrigins,
    policy =>
    {
        policy.WithOrigins("*");
    });
});


// Add services to the container.
builder.Services.AddControllers();

builder.Services
    .AddScoped<IYnabClient, YnabClient>()
    .AddScoped<IRequestUriBuilder, RequestUriBuilder>()
    .AddScoped<IYnabHttpClientBuilder, YnabHttpClientBuilder>()
    .AddScoped<ITransactionClient, TransactionClient>();

// Add AWS Lambda support. When application is run in Lambda Kestrel is swapped out as the web server with Amazon.Lambda.AspNetCoreServer. This
// package will act as the webserver translating request and responses between the Lambda event source and ASP.NET Core.
builder.Services.AddAWSLambdaHosting(LambdaEventSource.RestApi);

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();

app.UseCors(TransactionSorterSpecificOrigins);

app.MapControllers();

app.MapGet("/", () => "Welcome to running ASP.NET Core Minimal API on AWS Lambda");

app.Run();
