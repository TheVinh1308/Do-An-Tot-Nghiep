using API_Server.Models;
using server_api.Models;

namespace server_api.Interface
{
    public interface IPaymentMethodRepository
    {
        Task DeletePaymentMethodAsync(int paymentMethodId);
        Task<List<PaymentMethod>> GetAllPaymentMethodAsync();
        Task<PaymentMethod> GetPaymentMethodAsync(int id);
        Task<PaymentMethod> InsertPaymentMethodAsync(PaymentMethod paymentMethod);
        Task UpdatePaymentMethodAsync(int paymentMethodId, PaymentMethod paymentMethod);
    }
}
