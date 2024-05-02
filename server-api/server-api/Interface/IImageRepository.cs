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
        Task UpdateImageAsync(int imageId, Image image);

        Task<Image> GetImageForPhone(int phoneId);
    }
}
