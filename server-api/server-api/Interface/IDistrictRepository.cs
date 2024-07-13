using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface IDistrictRepository
    {
        Task<List<Districts>> GetAllDistrictByProvinceAsync(int provinceId);
        Task<Districts> GetDistrictByIdAsync(int id);
    }
}
