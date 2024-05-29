using API_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace server_api.Interface
{
    public interface IImageRepository
    {
        Task DeleteImageAsync(int imageId);
        Task<List<Image>> GetAllImageAsync();
        Task<Image> GetImageAsync(int id);
        Task<Image> InsertImageAsync([FromForm]Image image);
        Task UpdateImageAsync([FromForm] int id, [FromForm] Image image);

        Task<Image> GetImageForPhoneAsync(int phoneId);
        Task<List<Image>> GetImageByModPhoneAsync(int modPhoneId);
    }
}
