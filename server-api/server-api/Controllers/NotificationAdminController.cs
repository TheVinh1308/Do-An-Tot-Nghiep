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
    public class NotificationAdminController : ControllerBase
    {
        private readonly INotificationAdminRepository _notificationAdminRepository;
        public NotificationAdminController(INotificationAdminRepository repository)
        {
            _notificationAdminRepository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllNotificationsAdmins()
        {
            try
            {
                return Ok(await _notificationAdminRepository.GetAllNotificationAdminAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNotificationsAdminById(int id)
        {
            var cart = await _notificationAdminRepository.GetNotificationAdminAsync(id);
            return cart == null ? NotFound() : Ok(cart);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewNotificationsAdmin([FromForm] NotificationAdmin notificationAdmin)
        {
            try
            {
                var newPhone = await _notificationAdminRepository.InsertNotificationAdminAsync(notificationAdmin);
                return CreatedAtAction(nameof(GetNotificationsAdminById), new { id = notificationAdmin.id }, notificationAdmin);
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNotificationAdmin(int id, [FromForm] NotificationAdmin notificationAdmin)
        {
            if (id != notificationAdmin.id)
            {
                return BadRequest("notificationAdmin không tồn tại");
            }
            try
            {
                await _notificationAdminRepository.UpdateNotificationAdminAsync(id, notificationAdmin);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }


    }
}
