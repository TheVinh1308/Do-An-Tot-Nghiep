using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class BrandRepository : IBrandRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public BrandRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteBrandAsync(int brandId)
        {
            var brand = _context.Brands.SingleOrDefault(x => x.Id == brandId);
            if (brand != null)
            {
                _context.Brands.Remove(brand);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Brand>> GetAllBrandAsync()
        {
            var brands = await _context.Brands.ToListAsync();
            return brands;
        }

        public async Task<Brand> GetBrandAsync(int id)
        {
            var brand = await _context.Brands.SingleOrDefaultAsync(x => x.Id == id);
            return brand;
        }

        public async Task<Brand> InsertBrandAsync([FromForm]Brand brand)
        {
            if (brand.LogoFile != null && brand.LogoFile.Length > 0)
            {
                var fileName = brand.LogoFile.FileName;
                // thư mục wwwroot/images/brands
                var imagePath = Path.Combine(_environment.WebRootPath, "images", "brands");
                var uploadPath = Path.Combine(imagePath, fileName);
                using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                {
                    await brand.LogoFile.CopyToAsync(fileStream);
                }
                brand.Logo = brand.LogoFile.FileName;
            }

            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();
            return brand;
        }

        public async Task UpdateBrandAsync([FromForm] int brandId, [FromForm] Brand brand)
        {
            if (brandId == brand.Id)
            {
                if (brand.LogoFile != null && brand.LogoFile.Length > 0)
                {
                    var fileName = brand.LogoFile.FileName;
                    // thư mục wwwroot/images/brands
                    var imagePath = Path.Combine(_environment.WebRootPath, "images", "brands");
                    var uploadPath = Path.Combine(imagePath, fileName);
                    using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                    {
                        await brand.LogoFile.CopyToAsync(fileStream);
                    }
                    brand.Logo = brand.LogoFile.FileName;
                }
                _context.Brands.Update(brand);
                await _context.SaveChangesAsync();
            }
        }
    }
}
