using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IPhoneRepository
    {
        Task<List<Phone>> GetAllPhoneAsync();
        Task<Phone> GetPhoneAsync(int id);
        Task<Phone> InsertPhoneAsync( [FromForm] Phone phone);
        Task UpdatePhoneAsync(int phoneId, [FromForm] Phone phone);
        Task DeletePhoneAsync(int phoneId);
        Task<List<Phone>> GetFirstPhoneEachModPhoneAsync();
        Task<List<Phone>> GetListPhoneByModPhoneAsync(int modPhoneId);
        Task<Phone> GetFirstPhoneByModPhoneIdAsync(int modPhoneId);
        Task<List<Phone>> GetPhonePromotionAsync();

        Task<List<Phone>> GetNewPhoneAsync();

        Task<List<Phone>> SearchPhone(string data);

        Task<List<Phone>> GetPhoneBuyBrandIdAsync(int brandId);
    }
}
