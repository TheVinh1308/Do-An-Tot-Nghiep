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
                .ThenInclude(p => p.Promotion)
                   .Where(p => p.Status == true)
                                              .ToListAsync();
            return phones;
        }

        public async Task<Phone> GetPhoneAsync(int id)
        {
            var phone = await _context.Phones.Include(p => p.ModPhone)
                                             .Include(p => p.ModPhone.Brand)
                                             .Include(p => p.ModPhone.Promotion)
                                             .SingleOrDefaultAsync(x => x.Id == id);
            return phone;
        }

        public async Task<List<Phone>>GetPhoneBuyBrandIdAsync(int brandId)
        {
            var phone = await _context.Phones
                .Where(p => p.ModPhone.BrandId == brandId)
                .Include(p => p.ModPhone)
                                             .Include(p => p.ModPhone.Brand)
                                             .Include(p => p.ModPhone.Promotion)
                                               .GroupBy(p => p.ModPhoneId)
                                       .Select(g => g.OrderBy(p => p.Id).First())
                                             .ToListAsync();
            return phone;
        }



        public async Task<List<Phone>> GetNewPhoneAsync()
        {
            var phones = await _context.Phones
                .Include(p => p.ModPhone)
                .ThenInclude(p => p.Brand)
                .ToListAsync();

            var result = phones
                .GroupBy(p => p.ModPhone.BrandId)
                .Select(g => g.OrderByDescending(p => p.Id).First())
                .OrderByDescending(p => p.Id)
                .ToList();

            return result;
        }

        public async Task<Phone> GetFirstPhoneByModPhoneIdAsync(int modPhoneId)
        {
            var phone = await _context.Phones.Include(p => p.ModPhone)
                .ThenInclude(pro => pro.Promotion)
                .Include(p => p.ModPhone)
                                             .ThenInclude(mp => mp.Brand)
                                             .FirstOrDefaultAsync(p => p.ModPhone.Id == modPhoneId);
            return phone;
        }

        public async Task<Phone> InsertPhoneAsync([FromForm] Phone phone)
        {
            _context.Phones.Add(phone);
            await _context.SaveChangesAsync();
            return phone;
        }

        public async Task DeletePhoneAsync(int phoneId)
        {
            var phone = _context.Phones.SingleOrDefault(x => x.Id == phoneId);
            if (phone != null)
            {
                phone.Status = false;
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdatePhoneAsync( int phoneId, [FromForm] Phone phone)
        {
           if(phoneId == phone.Id )
           {
                _context.Phones.Update(phone);
                await _context.SaveChangesAsync();
           }
        }
        public async Task<List<Phone>> GetPhonePromotionAsync()
        {
            var result = await _context.Phones
     .Include(p => p.ModPhone)
     .ThenInclude(mp => mp.Promotion)
     .Where(p => p.ModPhone.PromotionId != 1)
     .Where(p => p.ModPhone.Promotion.StartDay <= DateTime.Now && p.ModPhone.Promotion.EndDay >= DateTime.Now)
     .GroupBy(p => p.ModPhone.Name)
     .Select(g => g.OrderBy(p => p.ModPhone.Promotion.StartDay).FirstOrDefault()) // Chọn đại diện tùy ý
     .ToListAsync();


            return result;
        }

        public async Task<List<Phone>> GetFirstPhoneEachModPhoneAsync()
        {
            var result = await _context.Phones
                                       .Include(p => p.ModPhone)
                                           .ThenInclude(mp => mp.Brand)
                                       .Include(p => p.ModPhone)
                                           .ThenInclude(mp => mp.Promotion)
                                       .GroupBy(p => p.ModPhoneId)
                                       .Select(g => g.OrderBy(p => p.Id).First())
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

        public async Task<List<Phone>> SearchPhone(string data)
        {
            var result = await _context.Phones.Include(p => p.ModPhone).Include(p => p.ModPhone.Brand)
                                   .Where(a => a.Name.Contains(data))
                                    .GroupBy(p => p.ModPhoneId)
                                       .Select(g => g.OrderBy(p => p.Id).First())
                                       .ToListAsync();
                     
           
            return (result);
        }
    }
}
