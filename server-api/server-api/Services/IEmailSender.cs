namespace server_api.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
        Task SendEmailPDFAsync(string email, string subject, string message, Stream pdfStream);
    }
}
