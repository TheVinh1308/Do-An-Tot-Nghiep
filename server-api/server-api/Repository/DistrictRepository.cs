using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class DistrictRepository : IDistrictRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public DistrictRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        

        public async Task<List<Districts>> GetAllDistrictByProvinceAsync(int provinceId)
        {
            var districts = await _context.Districts
                .Where(d => d.provinceId == provinceId).ToListAsync();
            return districts;
        }

        public async Task<Districts> GetDistrictByIdAsync(int id)
        {
            var districts = await _context.Districts
                .Where(d => d.id == id).FirstOrDefaultAsync();
            return districts;
        }
    }
}
