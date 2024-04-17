using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IModPhoneRepository
    {
        Task<List<Phone>> GetAllModPhoneAsync();
        Task DeleteModPhoneAsync(int modPhoneId);
        Task<ModPhone> GetModPhoneAsync(int id);
        Task<ModPhone> InsertModPhoneAsync([FromForm] ModPhone modPhone);
        Task UpdateModPhoneAsync([FromForm] int modPhoneId, [FromForm] ModPhone modPhone);
    }
}
