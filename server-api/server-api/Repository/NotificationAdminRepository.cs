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
