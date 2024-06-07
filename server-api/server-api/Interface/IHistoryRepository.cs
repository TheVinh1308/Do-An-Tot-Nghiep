using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using server_api.Models;

namespace server_api.Interface
{
    public interface IHistoryRepository
    {
        Task<List<Historys>> GetAllHistoryAsync();
        Task<Historys> GetHistoryAsync(int id);
        Task<Historys> InsertHistoryAsync([FromForm] Historys historys);
    }
}
