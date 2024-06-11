using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class PromotionRepository : IPromotionRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public PromotionRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

       

        public async Task DeletePromotionAsync(int promotionId)
        {
            var promotion = _context.Promotions.SingleOrDefault(x => x.Id == promotionId);
            if (promotion != null)
            {
                promotion.Status = false;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Promotion>> GetAllPromotionAsync()
        {
            var promotion = await _context.Promotions.Where(b=>b.Status == true)
                .ToListAsync();
            return promotion;
        }

        public async Task<Promotion> GetPromotionAsync(int id)
        {
            var promotion = await _context.Promotions.SingleOrDefaultAsync(x => x.Id == id);
            return promotion;
        }

        public async Task<Promotion> InsertPromotionAsync([FromForm]Promotion promotion)
        {
           
            _context.Promotions.Add(promotion);
            await _context.SaveChangesAsync();
            return promotion;
        }

        public async Task UpdatePromotionAsync([FromForm] int promotionId, [FromForm] Promotion promotion)
        {
            { 
           
                _context.Promotions.Update(promotion);
                await _context.SaveChangesAsync();
            }
        }
    }
}
