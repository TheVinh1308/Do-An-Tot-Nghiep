using API_Server.Models;

namespace server_api.Interface
{
    public interface IPhoneRepository
    {
        Task<List<Phone>> GetAllPhoneAsync();
        Task<Phone> GetPhoneAsync(int id);
        Task<Phone> InsertPhoneAsync(Phone phone);
        Task UpdatePhoneAsync(int phoneId, Phone phone);
        Task DeletePhoneAsync(int phoneId);
        Task<List<Phone>> GetFirstPhoneEachModPhoneAsync();
    }
}
