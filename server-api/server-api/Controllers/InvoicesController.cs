using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Repository;
using server_api.Services;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : Controller
    {
        private readonly IInvoiceRepository _invoiceRepository;
        public InvoicesController(IInvoiceRepository repository)
        {
            _invoiceRepository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInvoices()
        {
            try
            {
                return Ok(await _invoiceRepository.GetAllInvoiceAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoiceById(int id)
        {
            var invoice = await _invoiceRepository.GetInvoiceAsync(id);
            return invoice == null ? NotFound() : Ok(invoice);
        }

        [HttpGet("/GetInvoiceByUserId/{userId}")]
        public async Task<IActionResult> GetInvoiceByUserId(string userId)
        {
            var invoice = await _invoiceRepository.GetInvoiceByUserIdAsync(userId);
            return invoice == null ? NotFound() : Ok(invoice);
        }
        // theo ngày
        [HttpGet("CountInvoices")]
        public async Task<IActionResult> CountInvoices()
        {
            var invoice = await _invoiceRepository.CountInvoicesAsync();
            return invoice == null ? NotFound() : Ok(invoice);
        }
        // theo tháng
        [HttpGet("CountInvoicesByMonth")]
        public async Task<IActionResult> CountInvoicesByMonth()
        {
            var invoice = await _invoiceRepository.CountInvoicesMonthAsync();
            return invoice == null ? NotFound() : Ok(invoice);
        }
        // theo tháng
        [HttpGet("CountInvoicesByYear")]
        public async Task<IActionResult> CountInvoicesByYear()
        {
            var invoice = await _invoiceRepository.CountInvoicesYearAsync();
            return invoice == null ? NotFound() : Ok(invoice);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewInvoice([FromForm] Invoice invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var newInvoice = await _invoiceRepository.InsertInvoiceAsync(invoice);
                return CreatedAtAction(nameof(GetInvoiceById), new { id = newInvoice.Id }, newInvoice);
            }
            catch (Exception ex)
            {
                // Log the exception details
                Console.WriteLine(ex); // Replace with your logging mechanism
                return StatusCode(500, "An error occurred while creating the invoice: " + ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInvoice(int id, Invoice invoice)
        {
            if (id != invoice.Id)
            {
                return BadRequest("Hoá đơn không tồn tại");
            }
            try
            {
                await _invoiceRepository.UpdateInvoiceAsync(id, invoice);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpPost("SendMailWithPdf")]
        public async Task<IActionResult> SendMailWithPdf(IFormFile pdf, [FromForm] string userId)
        {
            if (pdf == null || pdf.Length == 0)
                return BadRequest("No file uploaded");

            try
            {
                await _invoiceRepository.SendMailWithPdfAsync(pdf, userId);
                return Ok();
            }
            catch
            {
                return NotFound();
            }
        }



    }
}
