using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModPhonesController : ControllerBase
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
            var modPhone = await _modPhoneRepository.GetModPhoneAsync(id);
            return modPhone == null ? NotFound() : Ok(modPhone);
        }




        [HttpPost]
        public async Task<IActionResult> AddNewModPhone([FromForm]ModPhone modPhone)
        {
            if(modPhone == null)
            {
                return BadRequest("ModPhone object is null");
            }

            try
            {
                await _modPhoneRepository.InsertModPhoneAsync(modPhone);
                return CreatedAtAction(nameof(GetModPhoneById), new { id = modPhone.Id }, modPhone);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateModPhone([FromForm] int id, [FromForm] ModPhone modPhone)
        {
            if (id != modPhone.Id)
            {
                return BadRequest("Hãng điện thoại không tồn tại");
            }
            try
            {
                await _modPhoneRepository.UpdateModPhoneAsync(id, modPhone );
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModPhone(int id)
        {
            try
            {
                await _modPhoneRepository.DeleteModPhoneAsync(id);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }


    }
}
