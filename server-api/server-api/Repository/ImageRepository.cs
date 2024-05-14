using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
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

        public async Task<Image> GetImageForPhoneAsync(int phoneId)
        {
            var image = await _context.Images.FirstOrDefaultAsync(i => i.PhoneId == phoneId);

            return image;
        }


        public Task UpdateImageAsync(int imageId, Image image)
        {
            throw new NotImplementedException();
        }



      
        public async Task<Image> InsertImageAsync([FromForm] Image image)
        {
            // Khởi tạo mảng để lưu danh sách tên file
            List<string> fileNames = new List<string>();

            foreach (var file in image.Files)
            {
                if (file.Length > 0)
                {
                    var fileName = file.FileName;
                    var imagePath = Path.Combine(_environment.WebRootPath, "images", "image");

                    var uploadPath = Path.Combine(imagePath, fileName);
                    using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }

                    // Thêm tên file vào mảng
                    fileNames.Add(fileName);
                }
            }

            // Chuyển đổi danh sách tên file thành chuỗi JSON
            string jsonFileNames = Newtonsoft.Json.JsonConvert.SerializeObject(fileNames);

            // Lưu chuỗi JSON vào trường Path
            image.Path = jsonFileNames;

            _context.Images.Add(image);
            await _context.SaveChangesAsync();

            return image;
        }

        public async Task<List<Image>> GetImageByModPhoneAsync(int modPhoneId)
        {
            var phoneIds = await _context.Phones
                             .Where(p => p.ModPhoneId == modPhoneId)
                             .Select(p => p.Id)
                             .ToArrayAsync();

            var images = await _context.Images
                            .Include(i => i.Phone)
                            .Where(i => phoneIds.Contains(i.PhoneId))
                            .ToListAsync();
            return images;
        }
    }
}
