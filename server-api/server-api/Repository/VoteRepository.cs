using API_Server.Models;
using Microsoft.EntityFrameworkCore;
using server_api.Data;

namespace server_api.Repository
{
    public class VoteRepository
    {
        private readonly EPhoneShopIdentityContext _context;
        private readonly IWebHostEnvironment _environment;

        public VoteRepository(EPhoneShopIdentityContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task DeleteVoteAsync(int voteId)
        {
            var vote = _context.Votes.SingleOrDefault(x => x.Id == voteId);
            if (vote != null)
            {
                _context.Votes.Remove(vote);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Vote>> GetAllVoteAsync()
        {
            var votes = await _context.Votes.ToListAsync();
            return votes;
        }

        public async Task<Vote> GetVoteAsync(int id)
        {
            var vote = await _context.Votes.SingleOrDefaultAsync(x => x.Id == id);
            return vote;
        }

        public async Task<Vote> InsertVoteAsync(Vote vote)
        {
            _context.Votes.Add(vote);
            await _context.SaveChangesAsync();
            return vote;
        }

        public async Task UpdateVoteAsync(int voteId, Vote vote)
        {
            if (voteId == vote.Id)
            {

                _context.Votes.Update(vote);
                await _context.SaveChangesAsync();
            }
        }
    }
}
