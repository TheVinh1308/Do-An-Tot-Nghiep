using API_Server.Models;

namespace server_api.Interface
{
    public interface IInvoiceDetailRepository
    {
        Task DeleteInvoiceDetailAsync(int invoiceDetailId);
        Task<List<InvoiceDetail>> GetAllInvoiceDetailAsync();
        Task<InvoiceDetail> GetInvoiceDetailAsync(int id);
        Task<InvoiceDetail> InsertnvoiceDetailAsync(InvoiceDetail invoiceDetail);
        Task UpdateInvoiceDetailAsync(int invoiceDetailId, InvoiceDetail invoiceDetail);
    }
}
