using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface IWardRepository
    {
        Task<List<Wards>> GetAllWardsByDistrictIdAsync(int districtId);
        Task<Wards> GetWardByIDAsync(int id);
    }
}
