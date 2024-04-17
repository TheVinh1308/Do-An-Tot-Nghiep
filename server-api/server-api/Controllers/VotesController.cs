using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Data;
using server_api.Interface;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : Controller
    {
        private readonly IVoteRepository _voteRepository;
        public VotesController(IVoteRepository repository)
        {
            _voteRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVotes()
        {
            try
            {
                return Ok(await _voteRepository.GetAllVoteAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVoteById(int id)
        {
            var vote = await _voteRepository.GetVoteAsync(id);
            return vote == null ? NotFound() : Ok(vote);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewVote(Vote vote)
        {
            try
            {
                var newVote = await _voteRepository.InsertVoteAsync(vote);
                return CreatedAtAction(nameof(GetVoteById), new { vote }, vote);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
