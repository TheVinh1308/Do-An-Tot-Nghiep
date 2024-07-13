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
    public class DistrictController : ControllerBase
    {
        private readonly IDistrictRepository _districtRepository;
        public DistrictController( IDistrictRepository districtRepository)
        {
            _districtRepository = districtRepository;
        }

       

        [HttpGet("GetAllDistrictByProvince/{provinceId}")]
        public async Task<IActionResult> GetAllDistrictByProvince(int provinceId)
        {
            try
            {
                return Ok(await _districtRepository.GetAllDistrictByProvinceAsync(provinceId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetDistrictById(int id)
        {
            try
            {
                return Ok(await _districtRepository.GetDistrictByIdAsync(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}
