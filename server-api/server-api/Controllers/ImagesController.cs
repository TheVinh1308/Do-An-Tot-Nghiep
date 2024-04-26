using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : Controller
    {
        private readonly IImageRepository _imageRepository;
        public ImagesController(IImageRepository repository)
        {
            _imageRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllImage()
        {
            try
            {
                return Ok(await _imageRepository.GetAllImageAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImageById(int id)
        {
            var image = await _imageRepository.GetImageAsync(id);
            return image == null ? NotFound() : Ok(image);
        }

       
    }
}
