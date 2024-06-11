using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IPromotionRepository
    {
        Task<List<Promotion>> GetAllPromotionAsync();
        Task<Promotion> GetPromotionAsync(int id);
        Task<Promotion> InsertPromotionAsync([FromForm] Promotion promotion);
        Task UpdatePromotionAsync([FromForm] int promotionId, [FromForm] Promotion promotion);
        Task DeletePromotionAsync(int promotionId);
    }
}
