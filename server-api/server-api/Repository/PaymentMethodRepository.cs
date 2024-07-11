using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models.Momo;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class PaymentMethodRepository : IPaymentMethodRepository
    {

        private readonly EPhoneShopIdentityContext _context;

        public PaymentMethodRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
        }

        public async Task DeletePaymentMethodAsync(int paymentMethodId)
        {
            var paymentMethod = _context.PaymentMethods.SingleOrDefault(x => x.Id == paymentMethodId);
            if (paymentMethod != null)
            {
                _context.PaymentMethods.Remove(paymentMethod);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<PaymentMethod>> GetAllPaymentMethodAsync()
        {
            var paymentMethod = await _context.PaymentMethods.ToListAsync();
            return paymentMethod;
        }

        public async Task<PaymentMethod> GetPaymentMethodAsync(int id)
        {
            var paymentMethod = await _context.PaymentMethods.SingleOrDefaultAsync(x => x.Id == id);
            return paymentMethod;
        }

     

        public async Task<PaymentMethod> InsertPaymentMethodAsync(PaymentMethod paymentMethod)
        {
            _context.PaymentMethods.Add(paymentMethod);
            await _context.SaveChangesAsync();
            return paymentMethod;
        }

        public async Task UpdatePaymentMethodAsync(int paymentMethodId, PaymentMethod paymentMethod)
        {
            if (paymentMethodId == paymentMethod.Id)
            {

                _context.PaymentMethods.Update(paymentMethod);
                await _context.SaveChangesAsync();
            }
        }


    }
}
