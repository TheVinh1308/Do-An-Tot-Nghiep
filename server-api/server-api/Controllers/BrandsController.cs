using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IBrandRepository _brandRepository;
        public BrandsController(IBrandRepository repository)
        {
            _brandRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBrands()
        {
            try
            {
                return Ok(await _brandRepository.GetAllBrandAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBrand(int id)
        {
            var brand =await _brandRepository.GetBrandAsync(id);
            return brand == null ? NotFound() : Ok(brand);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewBrand([FromForm]Brand brand)
        {
            try
            {
                var newBrand = await _brandRepository.InsertBrandAsync(brand);
                return CreatedAtAction(nameof(GetBrand), new { id = brand.Id }, brand);
            }
            catch
            {
                return BadRequest();
            }
          
        }
    }
}
