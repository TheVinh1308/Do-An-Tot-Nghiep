using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IInvoiceRepository
    {
        Task DeleteInvoiceAsync(int invoiceId);
        Task<List<Invoice>> GetAllInvoiceAsync();
        Task<Invoice> GetInvoiceAsync(int id);
        Task<Invoice> InsertInvoiceAsync([FromForm] Invoice invoice);
        Task UpdateInvoiceAsync([FromForm] int invoiceId,[FromForm] Invoice invoice);
        Task<List<Invoice>> GetInvoiceByUserIdAsync(string userId);
    }
}
