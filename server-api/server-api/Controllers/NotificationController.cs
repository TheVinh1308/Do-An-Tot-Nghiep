using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Interface;
using server_api.Models;
using server_api.Repository;
using System.Drawing.Drawing2D;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationRepository _nofiticationRepository;
        public NotificationController(INotificationRepository repository)
        {
            _nofiticationRepository = repository;
        }

        [HttpGet("GetNoficationByUserId/{userId}")]
        public async Task<IActionResult> GetNoficationByUserId(string userId)
        {
            try
            {
                return Ok(await _nofiticationRepository.GetAllBrandAsync(userId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetNotificationById(int id)
        {
            var vote = await _nofiticationRepository.GetNotificationAsync(id);
            return vote == null ? NotFound() : Ok(vote);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewNotification([FromForm] Notification notification)
        {
            try
            {
                // Validate the cart object if needed

                var newNotification = await _nofiticationRepository.InsertNotificationAsync(notification);

                // Return the newly created cart with appropriate status code
                return CreatedAtAction(nameof(GetNotificationById), new { id = newNotification.Id }, newNotification);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging
                Console.Error.WriteLine($"Error adding new notification: {ex}");

                // Return a generic error response
                return StatusCode(500, "An unexpected error occurred while adding the cart.");
            }
        }

    }
}
