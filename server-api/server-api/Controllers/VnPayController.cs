using API_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Models;
using server_api.Services;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VnPayController : Controller
    {
        private readonly IVnPayService _vnPayService;
        private readonly IInvoiceRepository _invoiceRepo;

        public VnPayController(IVnPayService vnPayService, IInvoiceRepository invoice)
        {
            _vnPayService = vnPayService;
            _invoiceRepo = invoice;
        }

        [HttpPost]
        public IActionResult CreatePaymentUrl(PaymentInformationModel model)
        {
            var url = _vnPayService.CreatePaymentUrl(model, HttpContext);

            return Ok(url);
        }
        [HttpGet()]
        public IActionResult PaymentCallback()
        {
            var response = _vnPayService.PaymentExecute(Request.Query);
           
            
           
            return Ok(response);
        }

    }
}
