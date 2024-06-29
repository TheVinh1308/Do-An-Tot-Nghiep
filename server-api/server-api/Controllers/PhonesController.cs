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

        [HttpGet]
        [Route("GetFisrtPhoneByModPhone/{modPhoneId}")]
        public async Task<IActionResult> GetFisrtPhoneByModPhone(int modPhoneId)
        {
            try
            {
                return Ok(await _phoneRepository.GetFirstPhoneByModPhoneIdAsync(modPhoneId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetPhonePromotion")]
        public async Task<IActionResult> GetPhonePromotion()
        {
            try
            {
                return Ok(await _phoneRepository.GetPhonePromotionAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpGet]
        [Route("GetNewPhone")]
        public async Task<IActionResult> GetNewPhone()
        {
            try
            {
                return Ok(await _phoneRepository.GetNewPhoneAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet]
        [Route("GetListPhoneByModPhone/{modPhoneId}")]
        public async Task<IActionResult> GetListPhoneByModPhone(int modPhoneId)
        {
            try
            {
                return Ok(await _phoneRepository.GetListPhoneByModPhoneAsync(modPhoneId));
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
        public async Task<IActionResult> AddNewPhone([FromForm]Phone phone)
        {
            try
            {
                var newPhone = await _phoneRepository.InsertPhoneAsync(phone);
                return CreatedAtAction(nameof(GetPhoneById), new { id = phone.Id }, phone);
            }
            catch 
            {
                return BadRequest();
            }
        
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePhone(int id, [FromForm] Phone phone)
        {
            if (id != phone.Id)
            {
                return BadRequest("Điện thoại không tồn tại");
            }
            try
            {
                await _phoneRepository.UpdatePhoneAsync(id, phone);
                return Ok();
            }
            catch
            {
                return NotFound();
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
        [HttpGet("search/{data}")]
        public async Task<IActionResult> Search(string data)
        {
            try
            {
                var result = await _phoneRepository.SearchPhone(data);
                return Ok(result);
            }
            catch
            {
                return NotFound();
            }
        }

        [HttpGet("getPhoneByBrandId/{brandId}")]
        public async Task<IActionResult> getPhoneByBrandId(int brandId)
        {
            try
            {
                var result = await _phoneRepository.GetPhoneBuyBrandIdAsync(brandId);
                return Ok(result);
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
