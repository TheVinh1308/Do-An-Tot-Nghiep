using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IInvoiceDetailRepository
    {
        Task DeleteInvoiceDetailAsync(int invoiceDetailId);
        Task<List<InvoiceDetail>> GetAllInvoiceDetailAsync();
        Task<InvoiceDetail> GetInvoiceDetailAsync(int id);
        Task<InvoiceDetail> InsertnvoiceDetailAsync([FromForm] InvoiceDetail invoiceDetail);
        Task UpdateInvoiceDetailAsync(int invoiceDetailId, InvoiceDetail invoiceDetail);
        Task<List<InvoiceDetail>> GetInvoiceDetailByInvoiceIdAsync(int invoiceId);
    }
}
