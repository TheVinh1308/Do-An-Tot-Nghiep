using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;

namespace server_api.Repository
{
    public class ImageRepository
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
            var image = await _context.Images.SingleOrDefaultAsync(x => x.Id == id);
            return image;
        }

        public async Task<Image[]> InsertImageAsync([FromForm] Image images)
        {
            List<Image> insertedImages = new List<Image>();

            foreach (var image in insertedImages)
            {
                if (image.Files != null && image.Files.Count > 0)
                {
                    try
                    {
                        var fileName = Guid.NewGuid().ToString() + Path.GetExtension(images.Files[0].FileName);
                        var imagePath = Path.Combine(_environment.WebRootPath, "images", "Images");
                        var uploadPath = Path.Combine(imagePath, fileName);
                        Directory.CreateDirectory(imagePath);
                        using (var fileStream = new FileStream(uploadPath, FileMode.Create))
                        {
                            await image.Files[0].CopyToAsync(fileStream);
                        }
                        image.Path = Path.Combine("images", "Images", fileName);
                        insertedImages.Add(image); // Add image to the list of inserted images
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"An error occurred while uploading the file: {ex.Message}");
                    }
                }
            }
            _context.Images.AddRange(insertedImages);
            await _context.SaveChangesAsync();
            return insertedImages.ToArray();
        }


        public async Task UpdateModPhoneAsync([FromForm] int modPhoneId, [FromForm] ModPhone modPhone)
        {
            if (modPhoneId == modPhone.Id)
            {
                if (modPhone.ImageFile != null && modPhone.ImageFile.Length > 0)
                {
                    var fileName = modPhone.ImageFile.FileName;
                    // thư mục wwwroot/images/brands
                    var imagePath = Path.Combine(_environment.WebRootPath, "images", "modPhones");
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
