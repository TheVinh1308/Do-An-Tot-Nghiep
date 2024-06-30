using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IFavoriteRepository
    {
        Task <Favorite> AddFavoriteAsync([FromForm] Favorite favorite);
        Task <Favorite> GetFavAsync(int id);
        Task DeleteFavoriteAsync(int id);
        
        Task UpdateFavorite(int id);

        Task<List<Favorite>> GetFavByUserIdAsync(string userId);
    }
}
