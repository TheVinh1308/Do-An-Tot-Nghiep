using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModPhonesController : Controller
    {
        private readonly IModPhoneRepository _modPhoneRepository;
        public ModPhonesController(IModPhoneRepository repository)
        {
            _modPhoneRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllModPhones()
        {
            try
            {
                return Ok(await _modPhoneRepository.GetAllModPhoneAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetModPhoneById(int id)
        {
            var phone = await _modPhoneRepository.GetModPhoneAsync(id);
            return phone == null ? NotFound() : Ok(phone);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewModPhone(ModPhone modPhone)
        {
            try
            {
                var newPhone = await _modPhoneRepository.InsertModPhoneAsync(modPhone);
                return CreatedAtAction(nameof(GetModPhoneById), new { modPhone }, modPhone);
            }
            catch
            {
                return BadRequest();
            }
        }


    }
}
