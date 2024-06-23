using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface INotificationRepository
    {
        Task<List<Notification>> GetAllBrandAsync(string userId);
        Task<Notification> InsertNotificationAsync([FromForm] Notification notification);

        Task<Notification> GetNotificationAsync(int id);
    }
}
