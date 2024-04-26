using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_api.Data;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase
    {
        private readonly IPhoneRepository _phoneRepository;
        public PhonesController(IPhoneRepository repository)
        {
            _phoneRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPhones()
        {
            try
            {
                return Ok(await _phoneRepository.GetAllPhoneAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("FirstByModel")]
        public async Task<IActionResult> GetFirstPhoneEachModPhone()
        {
            try
            {
                return Ok(await _phoneRepository.GetFirstPhoneEachModPhoneAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPhoneById(int id)
        {
            var phone = await _phoneRepository.GetPhoneAsync(id);
            return phone == null ? NotFound() : Ok(phone);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewPhone(Phone phone)
        {
            try
            {
                var newPhone = await _phoneRepository.InsertPhoneAsync(phone);
                return CreatedAtAction(nameof(GetPhoneById), new { phone }, phone);
            }
            catch 
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhone(int id)
        {
            try
            {
                await _phoneRepository.DeletePhoneAsync(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
