using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class WardRepository : IWardRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public WardRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

      

        public async Task<List<Wards>> GetAllWardsByDistrictIdAsync(int districtId)
        {
            var wards = await _context.Wards
                .Where(d => d.districtId == districtId)
                .ToListAsync();
            return wards;
        }

        public async Task<Wards> GetWardByIDAsync(int id)
        {
            var wards = await _context.Wards
                .Where(d => d.id == id)
                .FirstOrDefaultAsync();
            return wards;
        }
    }
}
