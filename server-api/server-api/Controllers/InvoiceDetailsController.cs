using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;

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
        [HttpPost]
        public async Task<IActionResult> AddNewInvoice(InvoiceDetail invoiceDetail)
        {
            try
            {
                var newInvoiceDetail = await _invoiceDetailRepository.InsertnvoiceDetailAsync(invoiceDetail);
                return CreatedAtAction(nameof(GetInvoiceDetailById), new { invoiceDetail }, invoiceDetail);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
