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
    public class HistoryController : ControllerBase
    {
        private readonly IHistoryRepository _historyRepository;
        public HistoryController(IHistoryRepository repository)
        {
            _historyRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllHistorys()
        {
            try
            {
                return Ok(await _historyRepository.GetAllHistoryAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHistoryById(int id)
        {
            var history =await _historyRepository.GetHistoryAsync(id);
            return history == null ? NotFound() : Ok(history);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewHistory([FromForm] Historys historys)
        {
            if (historys == null)
            {
                return BadRequest("Brand object is null");
            }

            try
            {
                await _historyRepository.InsertHistoryAsync(historys);
              
                return CreatedAtAction(nameof(GetHistoryById), new { id = historys.Id }, historys);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

      
    }
}
