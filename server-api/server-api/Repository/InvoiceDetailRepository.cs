using API_Server.Models;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class InvoiceDetailRepository : IInvoiceDetailRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public InvoiceDetailRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteInvoiceDetailAsync(int invoiceDetailId)
        {
            var invoiceDetail = _context.InvoiceDetails.SingleOrDefault(x => x.Id == invoiceDetailId);
            if (invoiceDetail != null)
            {
                _context.InvoiceDetails.Remove(invoiceDetail);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<InvoiceDetail>> GetAllInvoiceDetailAsync()
        {
            var invoiceDetails = await _context.InvoiceDetails.ToListAsync();
            return invoiceDetails;
        }

        public async Task<InvoiceDetail> GetInvoiceDetailAsync(int id)
        {
            var invoiceDeatil = await _context.InvoiceDetails.SingleOrDefaultAsync(x => x.Id == id);
            return invoiceDeatil;
        }

        public async Task<InvoiceDetail> InsertnvoiceDetailAsync(InvoiceDetail invoiceDetail)
        {
            _context.InvoiceDetails.Add(invoiceDetail);
            await _context.SaveChangesAsync();
            return invoiceDetail;
        }

        public async Task UpdateInvoiceDetailAsync(int invoiceDetailId, InvoiceDetail invoiceDetail)
        {
            if (invoiceDetailId == invoiceDetail.Id)
            {

                _context.InvoiceDetails.Update(invoiceDetail);
                await _context.SaveChangesAsync();
            }
        }
    }
}
