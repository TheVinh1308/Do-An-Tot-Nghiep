using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class ModPhoneRepository:IModPhoneRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public ModPhoneRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteModPhoneAsync(int modPhoneId)
        {
            var modPhone = _context.ModPhones.SingleOrDefault(x => x.Id == modPhoneId);
            if (modPhone != null)
            {
                modPhone.Status = false;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<ModPhone>> GetAllModPhoneAsync()
        {
            var modPhones = await _context.ModPhones.Include(p => p.Brand)
                .Where(p => p.Status == true)
                .ToListAsync();
            return modPhones;
        }

        public async Task<ModPhone> GetModPhoneAsync(int id)
        {
            var modPhone = await _context.ModPhones
                .Include(x=>x.Brand)
                .SingleOrDefaultAsync(x => x.Id == id);
            return modPhone;
        }

        public async Task<ModPhone> InsertModPhoneAsync([FromForm] ModPhone modPhone)
        {
            if (modPhone.ImageFile != null && modPhone.ImageFile.Length > 0)
            {
                var fileName = modPhone.ImageFile.FileName;
                // thư mục wwwroot/images/products
                var imagePath = Path.Combine(_environment.WebRootPath, "images", "products");
                var uploadPath = Path.Combine(imagePath, fileName);
                using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                {
                    await modPhone.ImageFile.CopyToAsync(fileStream);
                }
                modPhone.Image = modPhone.ImageFile.FileName;

            }
            _context.ModPhones.Add(modPhone);
            await _context.SaveChangesAsync();
            return modPhone;
        }

        public async Task UpdateModPhoneAsync([FromForm] int modPhoneId, [FromForm] ModPhone modPhone)
        {
            if (modPhoneId == modPhone.Id)
            {
                if (modPhone.ImageFile != null && modPhone.ImageFile.Length > 0)
                {
                    var fileName = modPhone.ImageFile.FileName;
                    // thư mục wwwroot/images/products
                    var imagePath = Path.Combine(_environment.WebRootPath, "images", "products");
                    var uploadPath = Path.Combine(imagePath, fileName);
                    using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                    {
                        await modPhone.ImageFile.CopyToAsync(fileStream);
                    }
                    modPhone.Image = modPhone.ImageFile.FileName;
                }
                _context.ModPhones.Update(modPhone);
                await _context.SaveChangesAsync();
            }
        }

       
    }
}
