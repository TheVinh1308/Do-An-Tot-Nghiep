using API_Server.Models;

namespace server_api.Interface
{
    public interface IInvoiceRepository
    {
        Task DeleteInvoiceAsync(int invoiceId);
        Task<List<Invoice>> GetAllInvoiceAsync();
        Task<Invoice> GetInvoiceAsync(int id);
        Task<Invoice> InsertInvoiceAsync(Invoice invoice);
        Task UpdateInvoiceAsync(int invoiceId, Invoice invoice);
    }
}
