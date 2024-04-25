using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : Controller
    {
        private readonly ICommentRepository _commentRepository;
        public CommentsController(ICommentRepository repository)
        {
            _commentRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllComment()
        {
            try
            {
                return Ok(await _commentRepository.GetAllCommentAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommentById(int id)
        {
            var comment = await _commentRepository.GetCommentAsync(id);
            return comment == null ? NotFound() : Ok(comment);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewComment(Comment comment)
        {
            try
            {
                var newComment = await _commentRepository.InsertCommentAsync(comment);
                return CreatedAtAction(nameof(GetCommentById), new { comment }, comment);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
