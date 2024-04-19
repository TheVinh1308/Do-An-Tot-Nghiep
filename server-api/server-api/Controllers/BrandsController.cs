using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Interface;
using server_api.Repository;
using System.Drawing.Drawing2D;

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
        public async Task<IActionResult> GetBrandById(int id)
        {
            var brand =await _brandRepository.GetBrandAsync(id);
            return brand == null ? NotFound() : Ok(brand);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewBrand([FromForm] Brand brand)
        {
            if (brand == null)
            {
                return BadRequest("Brand object is null");
            }

            try
            {
                await _brandRepository.InsertBrandAsync(brand);
              
                return CreatedAtAction(nameof(GetBrandById), new { id = brand.Id }, brand);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBrand([FromForm] int id, [FromForm] Brand brand)
        {
            if (id != brand.Id)
            {
                return BadRequest("Brand không tồn tại");
            }
            try
            {
                await _brandRepository.UpdateBrandAsync(id, brand);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrand(int brandId)
        {
            try
            {
                await _brandRepository.DeleteBrandAsync(brandId);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
