using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class ProvinceRepository : IProvinceRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public ProvinceRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task<List<Provinces>> GetAllProvinceAsync()
        {
            var province = await _context.Provinces.ToListAsync();
            return province;
        }

        public async Task<Provinces> GetProvinceByIdAsync(int id)
        {
            var province = await _context.Provinces
                .Where(p=>p.id == id)
                .FirstOrDefaultAsync();
            return province;
        }
    }
}
