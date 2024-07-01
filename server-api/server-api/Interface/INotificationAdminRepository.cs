using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface INotificationAdminRepository
    {
        Task<List<NotificationAdmin>> GetAllNotificationAdminAsync();
        Task<NotificationAdmin> GetNotificationAdminAsync(int id);
        Task<NotificationAdmin> InsertNotificationAdminAsync([FromForm] NotificationAdmin notificationAdmin);
        Task UpdateNotificationAdminAsync([FromForm] int notificationAdminId, [FromForm] NotificationAdmin notificationAdmin);

    }
}
