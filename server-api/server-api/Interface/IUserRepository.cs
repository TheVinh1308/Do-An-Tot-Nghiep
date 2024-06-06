using API_Server.Models;
using EshopIdentity.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUserAsync();
        Task<User> GetUserAsync(string id);
        Task<string> LoginAsync(LoginModel account);
        Task<string> RegisterAsync(RegisterModel account);
        Task<string> RegisterAdminAsync(RegisterModel account);

    }
}
