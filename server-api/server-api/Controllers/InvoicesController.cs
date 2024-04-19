using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;

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
        [HttpPost]
        public async Task<IActionResult> AddNewInvoice(Invoice invoice)
        {
            try
            {
                var newInvoice = await _invoiceRepository.InsertInvoiceAsync(invoice);
                return CreatedAtAction(nameof(GetInvoiceById), new { invoice }, invoice);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
