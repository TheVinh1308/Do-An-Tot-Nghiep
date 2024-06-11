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
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionRepository _promotionRepository;
        public PromotionController(IPromotionRepository repository)
        {
            _promotionRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPromotions()
        {
            try
            {
                return Ok(await _promotionRepository.GetAllPromotionAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPromotionById(int id)
        {
            var brand =await _promotionRepository.GetPromotionAsync(id);
            return brand == null ? NotFound() : Ok(brand);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewPromotion([FromForm] Promotion promotion)
        {
            if (promotion == null)
            {
                return BadRequest("Brand object is null");
            }

            try
            {
                await _promotionRepository.InsertPromotionAsync(promotion);
              
                return CreatedAtAction(nameof(GetPromotionById), new { id = promotion.Id }, promotion);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePromotion([FromForm] int id, [FromForm] Promotion promotion)
        {
            if (id != promotion.Id)
            {
                return BadRequest("Brand không tồn tại");
            }
            try
            {
                await _promotionRepository.UpdatePromotionAsync(id, promotion);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromotion(int id)
        {
            try
            {
                await _promotionRepository.DeletePromotionAsync(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
