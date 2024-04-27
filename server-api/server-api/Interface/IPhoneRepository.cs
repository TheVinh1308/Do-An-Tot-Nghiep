using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IPhoneRepository
    {
        Task<List<Phone>> GetAllPhoneAsync();
        Task<Phone> GetPhoneAsync(int id);
        Task<Phone> InsertPhoneAsync( [FromForm] Phone phone);
        Task UpdatePhoneAsync(int phoneId, Phone phone);
        Task DeletePhoneAsync(int phoneId);
        Task<List<Phone>> GetFirstPhoneEachModPhoneAsync();
    }
}
