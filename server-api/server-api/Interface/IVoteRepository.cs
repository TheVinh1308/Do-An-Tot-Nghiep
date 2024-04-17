using API_Server.Models;

namespace server_api.Interface
{
    public interface IVoteRepository
    {
        Task DeleteVoteAsync(int voteId);
        Task<List<Vote>> GetAllVoteAsync();
        Task<Vote> GetVoteAsync(int id);
        Task<Vote> InsertVoteAsync(Vote vote);
        Task UpdateVoteAsync(int voteId, Vote vote);
    }
}
