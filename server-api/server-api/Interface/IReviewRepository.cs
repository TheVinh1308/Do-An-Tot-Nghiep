using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IReviewRepository
    {
        Task DeleteReviewAsync(int voteId);
        Task<List<Review>> GetAllReviewAsync();
        Task<Review> GetReviewAsync(int id);
        Task<Review> InsertReviewAsync([FromForm]Review vote);
        Task UpdateReviewAsync(int voteId, Review vote);

        Task<List<Review>> GetReviewByModPhone(int modphoneId);
    }
}
