using Microsoft.AspNetCore.Mvc;
using Server.Models.Momo;

namespace Server.Services
{
    public interface IMomoService
    {
        Task<MomoCreatePaymentResponseModel> CreatePaymentAsync([FromForm] string fullName, [FromForm] double amount);
        MomoExecuteResponseModel PaymentExecuteAsync(IQueryCollection collection);
    }
}