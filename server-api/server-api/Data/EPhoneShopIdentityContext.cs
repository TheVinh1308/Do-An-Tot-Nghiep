using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server_api.Models;

namespace server_api.Data
{
    public class EPhoneShopIdentityContext : IdentityDbContext<User>
    {
       
        public EPhoneShopIdentityContext(DbContextOptions options) : base(options)
        {

        }
    }
}
