using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using server_api.Services;
using server_api.Models;
using Org.BouncyCastle.Asn1.Ocsp;
using static Org.BouncyCastle.Crypto.Engines.SM2Engine;

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

        public class TopSellingInvoiceDetail
        {
            public InvoiceDetail InvoiceDetail { get; set; }
            public int TotalQuantity { get; set; }
        }

        // Bán hàng theo ngày
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailAsync()
        {
            DateTime fromDate = DateTime.UtcNow.Date; // Ngày bắt đầu là ngày hôm nay, bỏ qua phần giờ, phút, giây
            DateTime toDate = fromDate.AddDays(1).AddTicks(-1); // Ngày kết thúc là cuối ngày hôm nay

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone.ModPhone.Brand)
                .Include(i => i.Phone.ModPhone)
                .Include(i => i.Phone)
                .Include(i => i.Invoice)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.PhoneId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // Bán hàng theo tháng
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailByMonthAsync()
        {
            DateTime fromDate = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1); // Ngày bắt đầu là ngày đầu tiên của tháng hiện tại
            DateTime toDate = fromDate.AddMonths(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của tháng hiện tại

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone.ModPhone.Brand)
                .Include(i => i.Phone.ModPhone)
                .Include(i => i.Phone)
                .Include(i => i.Invoice)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.PhoneId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // Bán hàng theo năm
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetailByYearAsync()
        {
            int currentYear = DateTime.UtcNow.Year; // Lấy năm hiện tại

            var fromDate = new DateTime(currentYear, 1, 1); // Ngày bắt đầu là ngày đầu tiên của năm hiện tại
            var toDate = fromDate.AddYears(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của năm hiện tại

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone)
                .Include(i => i.Invoice)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.PhoneId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // Hiệu suất bán hàng theo brand tính theo ngày
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlAsync()
        {
            DateTime fromDate = DateTime.UtcNow.Date; // Ngày bắt đầu là ngày hôm nay, bỏ qua phần giờ, phút, giây
            DateTime toDate = fromDate.AddDays(1).AddTicks(-1); // Ngày kết thúc là cuối ngày hôm nay

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone)
                .ThenInclude(i => i.ModPhone)
                .ThenInclude(i => i.Brand)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i.Phone.ModPhone.BrandId,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.BrandId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // Hiệu suất bán hàng theo brand tính theo tháng
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlForMonthAsync()
        {
            DateTime fromDate = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1); // Ngày bắt đầu là ngày đầu tiên của tháng hiện tại
            DateTime toDate = fromDate.AddMonths(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của tháng hiện tại

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone)
                .ThenInclude(i => i.ModPhone)
                .ThenInclude(i => i.Brand)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i.Phone.ModPhone.BrandId,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.BrandId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // Hiệu suất bán hàng theo brand tính theo năm
        public async Task<List<TopSellingInvoiceDetail>> GetTopSellInvoiceDetaiByBrandlForYearAsync()
        {
            int currentYear = DateTime.UtcNow.Year; // Lấy năm hiện tại

            var fromDate = new DateTime(currentYear, 1, 1); // Ngày bắt đầu là ngày đầu tiên của năm hiện tại
            var toDate = fromDate.AddYears(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của năm hiện tại

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone)
                .ThenInclude(i => i.ModPhone)
                .ThenInclude(i => i.Brand)
                .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .Select(i => new
                {
                    i.PhoneId,
                    i.Quantity,
                    i.Phone.ModPhone.BrandId,
                    i
                })
                .ToListAsync();

            var topSellingInvoiceDetails = invoiceDetails
                .GroupBy(i => i.BrandId)
                .Select(g => new TopSellingInvoiceDetail
                {
                    InvoiceDetail = g.First().i, // Chọn một InvoiceDetail đại diện cho mỗi nhóm
                    TotalQuantity = g.Sum(i => i.Quantity)
                })
                .OrderByDescending(g => g.TotalQuantity)
                .Take(5)
                .ToList();

            return topSellingInvoiceDetails;
        }

        // theo ngày
        public async Task<int> TotalPriceAsync()
        {
            DateTime fromDate = DateTime.UtcNow.Date; // Ngày bắt đầu là ngày hôm nay, bỏ qua phần giờ, phút, giây
            DateTime toDate = fromDate.AddDays(1).AddTicks(-1); // Ngày kết thúc là cuối ngày hôm nay
            var items = await _context.InvoiceDetails
                .Include(i => i.Invoice)
                .Include(i => i.Phone) // Assuming you need to include Phone to access its Price
                .Where(i => i.Invoice.Status == 3 && i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .ToListAsync();

            int total = 0;
            items.ForEach(i =>
            {
                total += i.Phone.Price * i.Quantity;
            });
            return total;
        }
        // theo tháng
        public async Task<int> TotalPriceMonthAsync()
        {
            DateTime fromDate = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1); // Ngày bắt đầu là ngày đầu tiên của tháng hiện tại
            DateTime toDate = fromDate.AddMonths(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của tháng hiện tại
            var items = await _context.InvoiceDetails
                .Include(i => i.Invoice)
                .Include(i => i.Phone) // Assuming you need to include Phone to access its Price
                .Where(i => i.Invoice.Status == 3 && i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .ToListAsync();

            int total = 0;
            items.ForEach(i =>
            {
                total += i.Phone.Price * i.Quantity;
            });
            return total;
        }
        // theo năm
        public async Task<int> TotalPriceYearAsync()
        {
            int currentYear = DateTime.UtcNow.Year; // Lấy năm hiện tại

            var fromDate = new DateTime(currentYear, 1, 1); // Ngày bắt đầu là ngày đầu tiên của năm hiện tại
            var toDate = fromDate.AddYears(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của năm hiện tại
            var items = await _context.InvoiceDetails
                .Include(i => i.Invoice)
                .Include(i => i.Phone) // Assuming you need to include Phone to access its Price
                .Where(i => i.Invoice.Status == 3 && i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                .ToListAsync();

            int total = 0;
            items.ForEach(i =>
            {
                total += i.Phone.Price * i.Quantity;
            });
            return total;
        }

        public async Task<InvoiceDetail> GetInvoiceDetailAsync(int id)
        {
            var invoiceDeatil = await _context.InvoiceDetails.SingleOrDefaultAsync(x => x.Id == id);
            return invoiceDeatil;
        }

        public async Task<List<InvoiceDetail>> GetInvoiceDetailByInvoiceIdAsync(int invoiceId)
        {
            var invoiceDeatil = await _context.InvoiceDetails
                .Where(i => i.InvoiceId == invoiceId)
                .Include(i => i.Invoice)
                .Include(i => i.Phone)
                .ThenInclude(i => i.ModPhone)
                .ToListAsync();
            return invoiceDeatil;
        }

        public async Task<InvoiceDetail> InsertnvoiceDetailAsync([FromForm] InvoiceDetail invoiceDetail)
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


        public static class DateTimeExtensions
        {
        }
        // Doanh thu các ngày trong tuần
        public async Task<decimal[]> GetWeeklySalesAsync()
        {
            DateTime startOfWeek = DateTime.UtcNow.StartOfWeek(DayOfWeek.Monday);
            DateTime endOfWeek = startOfWeek.AddDays(7).AddTicks(-1);

            var invoiceDetails = await _context.InvoiceDetails
                .Include(i => i.Phone)
                .Include(i => i.Invoice)
                .Where(i => i.Invoice.IssuedDate >= startOfWeek && i.Invoice.IssuedDate <= endOfWeek)
                .ToListAsync();

            var salesByDay = new decimal[7];

            foreach (var invoiceDetail in invoiceDetails)
            {
                var issuedDate = invoiceDetail.Invoice.IssuedDate;
                int dayOfWeek = (int)issuedDate.DayOfWeek;
                dayOfWeek = dayOfWeek == 0 ? 6 : dayOfWeek - 1; // Chuyển đổi Sunday (0) thành 6 và các ngày khác giảm 1

                salesByDay[dayOfWeek] += invoiceDetail.Quantity * invoiceDetail.Phone.Price; // Assuming Phone has Price property
            }

            return salesByDay;
        }
        // Doanh thu các Tháng trong năm
        public async Task<decimal[]> GetMonthlySalesAsync()
        {
            int currentYear = DateTime.UtcNow.Year;
            var salesByMonth = new decimal[12];

            for (int month = 1; month <= 12; month++)
            {
                DateTime fromDate = new DateTime(currentYear, month, 1);
                DateTime toDate = fromDate.AddMonths(1).AddTicks(-1);

                var invoiceDetails = await _context.InvoiceDetails
                    .Include(i => i.Phone)
                    .Include(i => i.Invoice)
                    .Where(i => i.Invoice.IssuedDate >= fromDate && i.Invoice.IssuedDate <= toDate)
                    .ToListAsync();

                foreach (var invoiceDetail in invoiceDetails)
                {
                    salesByMonth[month - 1] += invoiceDetail.Quantity * invoiceDetail.Phone.Price; // Assuming Phone has Price property
                }
            }

            return salesByMonth;
        }

    }
}
