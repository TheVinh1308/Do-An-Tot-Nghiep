using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

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

        [HttpGet("GetCartByUserId/{userId}")]
        public async Task<IActionResult> GetCartByUserId(string userId)
        {
            var cart = await _cartRepository.GetCartByUserIdAsync(userId);
            return cart == null ? NotFound() : Ok(cart);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewCart([FromForm] Cart cart)
        {
            try
            {
                // Validate the cart object if needed

                var newCart = await _cartRepository.InsertCartAsync(cart);

                // Return the newly created cart with appropriate status code
                return CreatedAtAction(nameof(GetCartById), new { id = newCart.Id }, newCart);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging
                Console.Error.WriteLine($"Error adding new cart: {ex}");

                // Return a generic error response
                return StatusCode(500, "An unexpected error occurred while adding the cart.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCart([FromForm] int id, [FromForm] Cart cart)
        {
            if (id != cart.Id)
            {
                return BadRequest("Cart không tồn tại");
            }
            try
            {
                await _cartRepository.UpdateCartAsync(id, cart);
                return Ok();
            }
            catch (Exception ex)
            {
                // Log the exception for debugging
                Console.Error.WriteLine($"Error adding new cart: {ex}");
                return StatusCode(500, ex );
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            try
            {
                await _cartRepository.DeleteCartAsync(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }


    }
}
