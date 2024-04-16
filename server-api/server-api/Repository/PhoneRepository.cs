using API_Server.Models;
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
            var phones = await _context.Phones.ToListAsync();
            return phones;
        }

        public async Task<Phone> GetPhoneAsync(int id)
        {
            var phone = await _context.Phones.SingleOrDefaultAsync(x => x.Id == id);
            return phone;
        }

        public async Task<Phone> InsertPhoneAsync(Phone phone)
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
    }
}
