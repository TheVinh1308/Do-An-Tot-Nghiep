using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class ImageRepository : IImageRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public ImageRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteImageAsync(int imageId)
        {
            var image = _context.Images.SingleOrDefault(x => x.Id == imageId);
            if (image != null)
            {
                _context.Images.Remove(image);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Image>> GetAllImageAsync()
        {
            var images = await _context.Images.ToListAsync();
            return images;
        }

        public async Task<Image> GetImageAsync(int id)
        {
            var image = await _context.Images.FirstOrDefaultAsync(x => x.Id == id);
            return image;
        }

        public async Task<Image> GetImageForPhone(int phoneId)
        {
            var image = await _context.Images.FirstOrDefaultAsync(i => i.PhoneId == phoneId);

            return image;
        }


        public Task UpdateImageAsync(int imageId, Image image)
        {
            throw new NotImplementedException();
        }

      

        public Task<Image> InsertImageAsync(Image image)
        {
            throw new NotImplementedException();
        }
    }
}
