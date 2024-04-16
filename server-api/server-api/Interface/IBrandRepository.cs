using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IBrandRepository
    {
        Task<List<Brand>> GetAllBrandAsync();
        Task<Brand> GetBrandAsync(int id);
        Task<Brand> InsertBrandAsync([FromForm]Brand brand);
        Task UpdateBrandAsync(int brandId, Brand brand);
        Task DeleteBrandAsync(int brandId);
    }
}
