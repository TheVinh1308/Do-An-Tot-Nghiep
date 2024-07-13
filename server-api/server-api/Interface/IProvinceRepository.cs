using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface IProvinceRepository
    {
        Task<List<Provinces>> GetAllProvinceAsync();
        Task<Provinces> GetProvinceByIdAsync(int id);

    }
}
