using API_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server_api.Data;
using server_api.Interface;

namespace server_api.Repository
{
    public class PhoneRepository : IPhoneRepository
    {
        private readonly EPhoneShopIdentityContext _context;

        public PhoneRepository(EPhoneShopIdentityContext context)
        {
            _context = context;
        }

        public async Task<List<Phone>> GetAllPhoneAsync()
        {
            var phones = await _context.Phones.Include(p => p.ModPhone)
                                              .ToListAsync();
            return phones;
        }

        public async Task<Phone> GetPhoneAsync(int id)
        {
            var phone = await _context.Phones.Include(p => p.ModPhone)
                                             .Include(p => p.ModPhone.Brand)
                                             .SingleOrDefaultAsync(x => x.Id == id);
            return phone;
        }

        public async Task<Phone> InsertPhoneAsync([FromForm]Phone phone)
        {
             _context.Phones.Add(phone);
            await _context.SaveChangesAsync();     
            return phone;
        }

        public async Task DeletePhoneAsync(int phoneId)
        {
            var phone = _context.Phones.SingleOrDefault(x => x.Id == phoneId);
            if(phone != null)
            {
                _context.Phones.Remove(phone);
                  await _context.SaveChangesAsync();
            }
        }

        public async Task UpdatePhoneAsync(int phoneId, Phone phone)
        {
           if(phoneId == phone.Id )
           {
                _context.Phones.Update(phone);
                await _context.SaveChangesAsync();
           }
        }

        public async Task<List<Phone>> GetFirstPhoneEachModPhoneAsync()
        {
            var result = await _context.Phones
                                       .Include(p => p.ModPhone)
                                       .Include(p => p.ModPhone.Brand)
                                       .GroupBy(p => new { p.ModPhoneId, p.Rom })
                                       .Select(g => g.First())
                                       .ToListAsync();

            return result;
        }


        public async Task<List<Phone>> GetListPhoneByModPhoneAsync(int modPhoneId)
        {
            var phones = await _context.Phones.Include(a => a.ModPhone).ThenInclude(a => a.Promotion)
                                                .Where(p => p.ModPhoneId == modPhoneId)
                                                .ToListAsync();

            return phones;
        }
    }
}
