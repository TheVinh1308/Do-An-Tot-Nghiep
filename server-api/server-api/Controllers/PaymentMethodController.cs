using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Server.Models.Momo;
using Server.Services;
using server_api.Interface;
using server_api.Models;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : Controller
    {
        private readonly IPaymentMethodRepository _paymentMethodRepository;
        private IMomoService _momoService;
        public PaymentMethodController(IPaymentMethodRepository repository, IMomoService momoService)
        {
            _paymentMethodRepository = repository;
            _momoService = momoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPaymentMethod()
        {
            try
            {
                return Ok(await _paymentMethodRepository.GetAllPaymentMethodAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentMethodById(int id)
        {
            var comment = await _paymentMethodRepository.GetPaymentMethodAsync(id);
            return comment == null ? NotFound() : Ok(comment);
        }
        [HttpPost]
        public async Task<IActionResult> AddNewPaymentMethod(PaymentMethod paymentMethod)
        {
            try
            {
                var newpaymentMethod = await _paymentMethodRepository.InsertPaymentMethodAsync(paymentMethod);
                return CreatedAtAction(nameof(GetPaymentMethodById), new { id = paymentMethod.Id }, paymentMethod);
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost]
        [Route("MoMo")]
        public async Task<IActionResult> CreatePaymentUrl([FromForm] string fullName, [FromForm] double amount)
        {
            try
            {
                // Log request data
                Console.WriteLine($"Received payment request: fullName={fullName}, amount={amount}");

                var response = await _momoService.CreatePaymentAsync(fullName, amount);

                // Log response data
                Console.WriteLine($"Payment response: PayUrl={response.PayUrl}");

                var jsonResponse = new { url = response.PayUrl };
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                // Log the exception message and stack trace
                Console.WriteLine($"Error in CreatePaymentUrl: {ex.Message}");
                Console.WriteLine(ex.StackTrace);

                return StatusCode(500, new { ErrorMessage = "An error occurred while processing the request." });
            }
        }



        [HttpGet]
        [Route("ConfirmPayment")]
        public IActionResult PaymentCallBack([FromQuery] MomoExecuteResponseModel responseMoMo)
        {
            string errorCode = responseMoMo.errorCode;
            string orderId = responseMoMo.orderId;
            string amount = responseMoMo.amount;
            string date = responseMoMo.responseTime;

            // Redirect back to your React frontend with query parameters
            return Redirect($"http://localhost:3000/paymentconfirm?errorcode={Uri.EscapeDataString(errorCode)}&orderid={Uri.EscapeDataString(orderId)}&amount={Uri.EscapeDataString(amount)}&date={Uri.EscapeDataString(date)}");
        }

    }
}
