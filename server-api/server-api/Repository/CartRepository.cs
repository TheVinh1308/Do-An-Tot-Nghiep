using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;

namespace server_api.Repository
{
    public class CartRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public CartRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteCartAsync(int cartId)
        {
            var cart = _context.Carts.SingleOrDefault(x => x.Id == cartId);
            if (cart != null)
            {
                _context.Carts.Remove(cart);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Cart>> GetAllCartAsync()
        {
            var carts = await _context.Carts.ToListAsync();
            return carts;
        }

        public async Task<Cart> GetCartAsync(int id)
        {
            var cart = await _context.Carts.SingleOrDefaultAsync(x => x.Id == id);
            return cart;
        }

        public async Task<Cart> InsertCartAsync( Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        public async Task UpdateCartAsync( int cartId,  Cart cart)
        {
            if (cartId == cart.Id)
            {
                
                _context.Carts.Update(cart);
                await _context.SaveChangesAsync();
            }
        }
    }
}
