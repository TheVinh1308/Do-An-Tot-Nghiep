using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface ICartRepository
    {
        Task DeleteCartAsync(int cartId);
        Task<List<Cart>> GetAllCartAsync();
        Task<Cart> GetCartAsync(int id);
        Task<Cart> InsertCartAsync([FromForm] Cart cart);
        Task UpdateCartAsync(int id, [FromForm] Cart cart);
        Task<List<Cart>> GetCartByUserIdAsync(string userId);
    }
}
