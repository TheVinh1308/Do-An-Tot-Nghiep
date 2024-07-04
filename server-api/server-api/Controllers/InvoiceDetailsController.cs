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

        // lấy theo ngày
        [HttpGet("GetTopSellInvoiceDetail")]
        public async Task<IActionResult> GetTopSellInvoiceDetail()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetailAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo tháng
        [HttpGet("GetTopSellInvoiceDetailByMonth")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByMonth()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetailByMonthAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo năm
        [HttpGet("GetTopSellInvoiceDetailByYear")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByYear()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetailByYearAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        [HttpGet("GetTotalPrice")]
        public async Task<IActionResult> GetTotalPrice()
        {
            var invoiceDetail = await _invoiceDetailRepository.TotalPriceAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }


        [HttpGet("GetTopSellInvoiceDetailByBrand")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByBrand()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetaiByBrandlAsync();

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
