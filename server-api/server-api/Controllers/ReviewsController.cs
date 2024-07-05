using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Data;
using server_api.Interface;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : Controller
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewsController(IReviewRepository repository)
        {
            _reviewRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVotes()
        {
            try
            {
                return Ok(await _reviewRepository.GetAllReviewAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVoteById(int id)
        {
            var vote = await _reviewRepository.GetReviewAsync(id);
            return vote == null ? NotFound() : Ok(vote);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewVote([FromForm]Review review)
        {
            try
            {
                var newVote = await _reviewRepository.InsertReviewAsync(review);
                return CreatedAtAction(nameof(GetVoteById), new { review.Id }, review);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
