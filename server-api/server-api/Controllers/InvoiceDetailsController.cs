using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;

namespace server_api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceDetailsController : Controller
    {
        private readonly IInvoiceDetailRepository _invoiceDetailRepository;
        public InvoiceDetailsController(IInvoiceDetailRepository repository)
        {
            _invoiceDetailRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInvoiceDetails()
        {
            try
            {
                return Ok(await _invoiceDetailRepository.GetAllInvoiceDetailAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoiceDetailById(int id)
        {
            var invoice = await _invoiceDetailRepository.GetInvoiceDetailAsync(id);
            return invoice == null ? NotFound() : Ok(invoice);
        }

        [HttpGet("GetInvoiceDetailByInvoiceId/{invoiceId}")]
        public  async Task<IActionResult> GetInvoiceDetailByInvoiceId(int invoiceId)
        {
            var invoiceDetail = await _invoiceDetailRepository.GetInvoiceDetailByInvoiceIdAsync(invoiceId);

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        [HttpPost]
        public async Task<IActionResult> AddInvoiceDetail([FromForm] InvoiceDetail invoiceDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var newInvoiceDetail = await _invoiceDetailRepository.InsertnvoiceDetailAsync(invoiceDetail);
                return CreatedAtAction(nameof(GetInvoiceDetailById), new { id = newInvoiceDetail.Id }, newInvoiceDetail);
            }
            catch (Exception ex)
            {
                // Log the exception details
                Console.WriteLine(ex); // Replace with your logging mechanism
                return StatusCode(500, "An error occurred while creating the invoice detail: " + ex.Message);
            }
        }

    }
}
