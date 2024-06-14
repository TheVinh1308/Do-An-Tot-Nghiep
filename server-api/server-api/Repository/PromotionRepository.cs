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

        public PromotionRepository(EPhoneShopIdentityContext context)
        {
            _context = context;
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
            var promotion = await _context.Promotions
                .ToListAsync();
            return promotion;
        }

        public async Task<Promotion> GetPromotionAsync(int id)
        {
            var promotion = await _context.Promotions.SingleOrDefaultAsync(x => x.Id == id);
            return promotion;
        }

        public async Task<Promotion> InsertPromotionAsync([FromForm] Promotion promotion)
        {
            try
            {
                // Update the status before adding to the context

                _context.Promotions.Add(promotion);
                await _context.SaveChangesAsync();
                return promotion;
            }
            catch (DbUpdateException ex)
            {
                // Log the detailed error message
                var innerExceptionMessage = ex.InnerException?.Message ?? ex.Message;
                Console.WriteLine($"Error occurred while saving the entity changes: {innerExceptionMessage}");

                // You might want to rethrow the exception or handle it accordingly
                throw new Exception($"An error occurred while saving the promotion: {innerExceptionMessage}");
            }
        }

        public async Task UpdatePromotionAsync([FromForm] int promotionId, [FromForm] Promotion promotion)
        {
           
                _context.Promotions.Update(promotion);
                await _context.SaveChangesAsync();
        }
    }
}
