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
    public class ProvinceController : ControllerBase
    {
        private readonly IProvinceRepository _provinceRepository;
        public ProvinceController(IProvinceRepository repository)
        {
            _provinceRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProvince()
        {
            try
            {
                return Ok(await _provinceRepository.GetAllProvinceAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetProvinceById(int id)
        {
            try
            {
                return Ok(await _provinceRepository.GetProvinceByIdAsync(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
