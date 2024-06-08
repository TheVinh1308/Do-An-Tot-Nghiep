using API_Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;
using server_api.Models;

namespace server_api.Repository
{
    public class HistoryRepository : IHistoryRepository
    {
        private readonly EPhoneShopIdentityContext _context;

        public HistoryRepository(EPhoneShopIdentityContext context)
        {
            _context = context;
        }

      


        public Task<List<Historys>> GetAllHistoryAsync()
        {
          var historys = _context.Historys
                .Include(h=>h.User)
                .Include(h=>h.Phone)
                .ToListAsync();
            return historys;
        }

        public async Task<Historys> GetHistoryAsync(int id)
        {
           var history = await _context.Historys.SingleOrDefaultAsync(x => x.Id == id);
            return history;
        }


        public async Task<Historys> InsertHistoryAsync([FromForm] Historys historys)
        {
            _context.Historys.Add(historys);
            await _context.SaveChangesAsync();
            return historys;
        }

    }
}
