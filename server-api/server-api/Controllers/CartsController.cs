using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : Controller
    {
        private readonly ICartRepository _cartRepository;
        public CartsController(ICartRepository repository)
        {
            _cartRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCarts()
        {
            try
            {
                return Ok(await _cartRepository.GetAllCartAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCartById(int id)
        {
            var cart = await _cartRepository.GetCartAsync(id);
            return cart == null ? NotFound() : Ok(cart);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewCart(Cart cart)
        {
            try
            {
                var newCart = await _cartRepository.InsertCartAsync(cart);
                return CreatedAtAction(nameof(GetCartById), new { cart }, cart);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
