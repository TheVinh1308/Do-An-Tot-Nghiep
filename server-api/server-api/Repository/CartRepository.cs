using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class CartRepository : ICartRepository
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
            var carts = await _context.Carts
                 .Include(c => c.User)
                .Include(c => c.Phone)
                .ThenInclude(c => c.ModPhone)
                .ToListAsync();
            return carts;
        }

        public async Task<Cart> GetCartAsync(int id)
        {
            var cart = await _context.Carts.SingleOrDefaultAsync(x => x.Id == id);
            return cart;
        }

        public async Task<List<Cart>> GetCartByUserIdAsync(string userId)
        {
            var carts = await _context.Carts
                .Include(c => c.User)
                .Include(c => c.Phone)
                .ThenInclude(c => c.ModPhone)
                .Where(c => c.UserId == userId)
                .ToListAsync();

            return carts;
        }


        public async Task<Cart> InsertCartAsync([FromForm] Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        public async Task UpdateCartAsync(int id, [FromForm]  Cart cart)
        {
            if (   id == cart.Id)
            {
                _context.Carts.Update(cart);
                await _context.SaveChangesAsync();
            }
        }
    }
}
