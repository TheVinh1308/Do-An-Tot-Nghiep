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
    public class WardController : ControllerBase
    {
        private readonly IWardRepository _wardRepository;
        public WardController( IWardRepository wardRepository)
        {
            _wardRepository = wardRepository;
        }

       

        [HttpGet("GetAllWardsByDistrictId/{districtId}")]
        public async Task<IActionResult> GetAllWardsByDistrictId(int districtId)
        {
            try
            {
                return Ok(await _wardRepository.GetAllWardsByDistrictIdAsync(districtId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWardByID(int id)
        {
            try
            {
                return Ok(await _wardRepository.GetWardByIDAsync(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
