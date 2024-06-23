using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public NotificationRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

     
        public async Task<List<Notification>> GetAllBrandAsync(string userId)
        {
            var notifica = await _context.Notifications.Where(b=>b.UserId == userId)
                .Include(p=>p.Phone)
                .ThenInclude(p=>p.ModPhone)
                .ThenInclude(p=>p.Promotion)
                .ToListAsync();
            return notifica;
        }

        public async Task<Notification> GetNotificationAsync(int id)
        {
            var notification = await _context.Notifications.SingleOrDefaultAsync(x => x.Id == id);
            return notification;
        }

        public async Task<Notification> InsertNotificationAsync([FromForm] Notification notification)
        {
            _context.Notifications.Add(notification);
            await _context.SaveChangesAsync();
            return notification;
        }
    }
}
