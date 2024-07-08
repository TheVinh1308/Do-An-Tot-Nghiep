using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public ReviewRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteReviewAsync(int voteId)
        {
            var vote = _context.Reviews.SingleOrDefault(x => x.Id == voteId);
            if (vote != null)
            {
                _context.Reviews.Remove(vote);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Review>> GetAllReviewAsync()
        {
            var votes = await _context.Reviews.ToListAsync();
            return votes;
        }

        public async Task<Review> GetReviewAsync(int id)
        {
            var vote = await _context.Reviews.SingleOrDefaultAsync(x => x.Id == id);
            return vote;
        }

        public async Task<List<Review>> GetReviewByModPhone(int modphoneId)
        {
            var votes = await _context.Reviews.Include(p => p.User)
               .Where(i => i.ModPhoneId == modphoneId).OrderByDescending(p => p.Id)
               .ToListAsync();

            return votes;
        }

        public async Task<Review> InsertReviewAsync([FromForm]Review review)
        {
            if (review.ImageFile != null && review.ImageFile.Length > 0)
            {
                var fileName = review.ImageFile.FileName;
                // thư mục wwwroot/images/products
                var imagePath = Path.Combine(_environment.WebRootPath, "images", "reviews");
                var uploadPath = Path.Combine(imagePath, fileName);
                using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                {
                    await review.ImageFile.CopyToAsync(fileStream);
                }
                review.Path = review.ImageFile.FileName;

            }
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
            return review;
        }

        public async Task UpdateReviewAsync(int voteId, Review vote)
        {
            if (voteId == vote.Id)
            {

                _context.Reviews.Update(vote);
                await _context.SaveChangesAsync();
            }
        }
    }
}
