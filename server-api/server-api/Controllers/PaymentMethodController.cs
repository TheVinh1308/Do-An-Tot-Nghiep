using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Models;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : Controller
    {
        private readonly IPaymentMethodRepository _paymentMethodRepository;
        public PaymentMethodController(IPaymentMethodRepository repository)
        {
            _paymentMethodRepository = repository;
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
       

    }
}
