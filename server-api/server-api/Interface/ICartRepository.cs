using API_Server.Models;

namespace server_api.Interface
{
    public interface ICartRepository
    {
        Task DeleteCartAsync(int cartId);
        Task<List<Cart>> GetAllCartAsync();
        Task<Cart> GetCartAsync(int id);
        Task<Cart> InsertCartAsync(Cart cart);
        Task UpdateCartAsync(int cartId, Cart cart);
    }
}
