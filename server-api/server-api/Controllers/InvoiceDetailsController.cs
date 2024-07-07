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
        // Lấy theo  ngày
        [HttpGet("GetTotalPrice")]
        public async Task<IActionResult> GetTotalPrice()
        {
            var invoiceDetail = await _invoiceDetailRepository.TotalPriceAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo thnag1
        [HttpGet("GetTotalPriceMonth")]
        public async Task<IActionResult> GetTotalPriceMonth()
        {
            var invoiceDetail = await _invoiceDetailRepository.TotalPriceMonthAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }
        // Lấy theo năm
        [HttpGet("GetTotalPriceYear")]
        public async Task<IActionResult> GetTotalPriceYear()
        {
            var invoiceDetail = await _invoiceDetailRepository.TotalPriceYearAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo ngày
        [HttpGet("GetTopSellInvoiceDetailByBrand")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByBrand()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetaiByBrandlAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo tháng
        [HttpGet("GetTopSellInvoiceDetailByBrandForMonth")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByBrandForMonth()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetaiByBrandlForMonthAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy theo năm
        [HttpGet("GetTopSellInvoiceDetailByBrandForYear")]
        public async Task<IActionResult> GetTopSellInvoiceDetailByBrandForYear()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetTopSellInvoiceDetaiByBrandlForYearAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }


        // Lấy doanh thu các ngày trong tuần
        [HttpGet("GetSellDayToDay")]
        public async Task<IActionResult> GetSellDayToDay()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetWeeklySalesAsync();

            return invoiceDetail == null ? NotFound() : Ok(invoiceDetail);
        }

        // Lấy doanh thu các tháng trong năm
        [HttpGet("GetSellMonthToMonth")]
        public async Task<IActionResult> GetSellMonthToMonth()
        {
            var invoiceDetail = await _invoiceDetailRepository.GetMonthlySalesAsync();

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
