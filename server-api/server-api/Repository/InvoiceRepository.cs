using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class InvoiceRepository: IInvoiceRepository
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
            var invoices = await _context.Invoices
                .Include(i=>i.User)
                .Include(i=>i.PaymentMethod)
                .ToListAsync();
            return invoices;
        }

        public async Task<Invoice> GetInvoiceAsync(int id)
        {
            var invoice = await _context.Invoices
                 .Include(i => i.PaymentMethod)
                .SingleOrDefaultAsync(x => x.Id == id);
            return invoice;
        }


        public async Task<List<Invoice>> GetInvoiceByUserIdAsync(string userId)
        {
            var invoice = await _context.Invoices
                 .Include(i => i.PaymentMethod)
                .Where(i=>i.UserId == userId).ToListAsync();

            return invoice;
        }

        // Lấy theo ngày 
        public async Task<int> CountInvoicesAsync()
        {
            DateTime fromDate = DateTime.UtcNow.Date; // Ngày bắt đầu là ngày hôm nay, bỏ qua phần giờ, phút, giây
            DateTime toDate = fromDate.AddDays(1).AddTicks(-1);

            var count = await _context.Invoices
                .Where(i => i.Status == 3 && i.IssuedDate >= fromDate && i.IssuedDate <=toDate)
                .CountAsync();

            return count;
        }

        // Lấy theo tháng 
        public async Task<int> CountInvoicesMonthAsync()
        {
            DateTime fromDate = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1); // Ngày bắt đầu là ngày đầu tiên của tháng hiện tại
            DateTime toDate = fromDate.AddMonths(1).AddTicks(-1);

            var count = await _context.Invoices
                .Where(i => i.Status == 3 && i.IssuedDate >= fromDate && i.IssuedDate <= toDate)
                .CountAsync();

            return count;
        }

        // Lấy theo nam
        public async Task<int> CountInvoicesYearAsync()
        {
            int currentYear = DateTime.UtcNow.Year; // Lấy năm hiện tại

            var fromDate = new DateTime(currentYear, 1, 1); // Ngày bắt đầu là ngày đầu tiên của năm hiện tại
            var toDate = fromDate.AddYears(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của năm hiện tại

            var count = await _context.Invoices
                .Where(i => i.Status == 3 && i.IssuedDate >= fromDate && i.IssuedDate <= toDate)
                .CountAsync();

            return count;
        }
        public async Task<Invoice> InsertInvoiceAsync([FromForm]Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();
            return invoice;
        }

        public async Task UpdateInvoiceAsync([FromForm] int invoiceId, [FromForm] Invoice invoice)
        {
            if (invoiceId == invoice.Id)
            {

                _context.Invoices.Update(invoice);
                await _context.SaveChangesAsync();
            }
        }
    }
}
