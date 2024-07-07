using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class NotificationAdminRepository : INotificationAdminRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public NotificationAdminRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

       
        public async Task<List<NotificationAdmin>> GetAllNotificationAdminAsync()
        {
            var notificationAdmin = await _context.NotificationsAdmins
                .OrderByDescending(p => p.id)
                .ToListAsync();
            return notificationAdmin;
        }
        // lấy theo ngày
        public async Task<List<NotificationAdmin>> GetToDayNotificationAdminAsync()
        {
            DateTime fromDate = DateTime.UtcNow.Date; // Ngày bắt đầu là ngày hôm nay, bỏ qua phần giờ, phút, giây
            DateTime toDate = fromDate.AddDays(1).AddTicks(-1); // Ngày kết thúc là cuối ngày hôm nay
            var notificationAdmin = await _context.NotificationsAdmins
                .Where(p=>p.time >= fromDate && p.time <= toDate)
                .OrderByDescending(p => p.id)
                .ToListAsync();
            return notificationAdmin;
        }

        // lấy theo tháng
        public async Task<List<NotificationAdmin>> GetThisMonthNotificationAdminAsync()
        {
            DateTime fromDate = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, 1); // Ngày bắt đầu là ngày đầu tiên của tháng hiện tại
            DateTime toDate = fromDate.AddMonths(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của tháng hiện tại
            var notificationAdmin = await _context.NotificationsAdmins
                .Where(p => p.time >= fromDate && p.time <= toDate)
                .OrderByDescending(p => p.id)
                .ToListAsync();
            return notificationAdmin;
        }

        // lấy theo năm
        public async Task<List<NotificationAdmin>> GetThisYearNotificationAdminAsync()
        {
            int currentYear = DateTime.UtcNow.Year; // Lấy năm hiện tại

            var fromDate = new DateTime(currentYear, 1, 1); // Ngày bắt đầu là ngày đầu tiên của năm hiện tại
            var toDate = fromDate.AddYears(1).AddTicks(-1); // Ngày kết thúc là cuối cùng của năm hiện tại
            var notificationAdmin = await _context.NotificationsAdmins
                .Where(p => p.time >= fromDate && p.time <= toDate)
                .OrderByDescending(p => p.id)
                .ToListAsync();
            return notificationAdmin;
        }
        public async Task<NotificationAdmin> GetNotificationAdminAsync(int id)
        {
            var notificationAdmin = await _context.NotificationsAdmins.SingleOrDefaultAsync(x => x.id == id);
            return notificationAdmin;
        }

        public async Task<NotificationAdmin> InsertNotificationAdminAsync([FromForm] NotificationAdmin notificationAdmin)
        {
            
            _context.NotificationsAdmins.Add(notificationAdmin);
            await _context.SaveChangesAsync();
            return notificationAdmin;
        }

        public async Task UpdateNotificationAdminAsync([FromForm] int notificationAdminId, [FromForm] NotificationAdmin notificationAdmin)
        {
            
                _context.NotificationsAdmins.Update(notificationAdmin);
                await _context.SaveChangesAsync();
            
        }
    }
}
