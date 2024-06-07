using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

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


        [HttpPost]
        public async Task<IActionResult> AddNewImage([FromForm] Image image)
        {
            if (image == null)
            {
                return BadRequest("Image object is null");
            }

            try
            {
                await _imageRepository.InsertImageAsync(image);
                return CreatedAtAction(nameof(GetImageById), new { id = image.Id }, image);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditImage([FromForm] int id, [FromForm] Image image)
        {
            if (id != image.Id)
            {
                return NotFound();
            }

            try
            {
                await _imageRepository.UpdateImageAsync(id,image);
                return CreatedAtAction(nameof(GetImageById), new { id = image.Id }, image);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetImgByModPhone/{modPhoneId}")]
        public async Task<IActionResult> GetImageByModPhone(int modPhoneId)
        {
            var image = await _imageRepository.GetImageByModPhoneAsync(modPhoneId);
            return image == null ? NotFound() : Ok(image);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImage(int id)
        {
            try
            {
                await _imageRepository.DeleteImageAsync(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
