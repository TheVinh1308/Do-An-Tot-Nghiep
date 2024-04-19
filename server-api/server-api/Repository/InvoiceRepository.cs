using API_Server.Models;
using Microsoft.EntityFrameworkCore;
using server_api.Data;

namespace server_api.Repository
{
    public class InvoiceRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public InvoiceRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteInvoiceAsync(int invoiceId)
        {
            var invoice = _context.Invoices.SingleOrDefault(x => x.Id == invoiceId);
            if (invoice != null)
            {
                _context.Invoices.Remove(invoice);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Invoice>> GetAllInvoiceAsync()
        {
            var invoices = await _context.Invoices.ToListAsync();
            return invoices;
        }

        public async Task<Invoice> GetInvoiceAsync(int id)
        {
            var invoice = await _context.Invoices.SingleOrDefaultAsync(x => x.Id == id);
            return invoice;
        }

        public async Task<Invoice> InsertnvoiceAsync(Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();
            return invoice;
        }

        public async Task UpdateInvoiceAsync(int invoiceId, Invoice invoice)
        {
            if (invoiceId == invoice.Id)
            {

                _context.Invoices.Update(invoice);
                await _context.SaveChangesAsync();
            }
        }
    }
}
