using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class FavoriteRepository : IFavoriteRepository
    {
        private readonly EPhoneShopIdentityContext _context;

        public FavoriteRepository(EPhoneShopIdentityContext context)
        {
            _context = context;
        }

        public async Task<Favorite> AddFavoriteAsync([FromForm] Favorite favorite)
        {
            _context.Favorites.Add(favorite);
            await _context.SaveChangesAsync();
            return favorite;
        }

        public async Task DeleteFavoriteAsync(int id)
        {
            var fav = await _context.Favorites.FindAsync(id);
            _context.Favorites.Remove(fav);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateFavorite(int id)
        {
            var fav = await _context.Favorites.FindAsync(id);
            _context.Favorites.Remove(fav);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Favorite>> GetFavByUserIdAsync(string userId)
        {
            var favs = await _context.Favorites
                .Include(c => c.User)
                .Include(c => c.Phone)
                .Where(c => c.UserId == userId)
                .ToListAsync();

            return favs;
        }

        public async Task<Favorite> GetFavAsync(int id)
        {
            var fav = await _context.Favorites
               .Include(c => c.Phone)
               .SingleOrDefaultAsync(x => x.Id == id);
            return fav;
        }
    }
}
