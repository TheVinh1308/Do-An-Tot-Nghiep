using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly IFavoriteRepository _favoriteRepository;
        public FavoritesController(IFavoriteRepository repository)
        {
            _favoriteRepository = repository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFavById(int id)
        {
            var cart = await _favoriteRepository.GetFavAsync(id);
            return cart == null ? NotFound() : Ok(cart);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewFav([FromForm]Favorite fav)
        {
            try
            {
                var newFav = await _favoriteRepository.AddFavoriteAsync(fav);
                return CreatedAtAction(nameof(GetFavById), new { id = newFav.Id }, newFav);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFav(int id)
        {
            try
            {
                await _favoriteRepository.DeleteFavoriteAsync(id);
                return Ok("Đã xóa fav");
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpGet("GetFavByUserId/{userId}")]
        public async Task<IActionResult> GetFavByUserId(string userId)
        {
            var fav = await _favoriteRepository.GetFavByUserIdAsync(userId);
            return fav == null ? NotFound() : Ok(fav);
        }
    }
}
