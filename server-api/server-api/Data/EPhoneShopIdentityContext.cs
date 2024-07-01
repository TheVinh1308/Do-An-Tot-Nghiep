using API_Server.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server_api.Models;
using server_api.Repository;

namespace server_api.Data
{
    public class EPhoneShopIdentityContext : IdentityDbContext<User>
    {
       
        public EPhoneShopIdentityContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Brand> Brands { get; set; } = default!;

        public DbSet<Cart> Carts { get; set; } = default!;

        public DbSet<Comment> Comments { get; set; } = default!;

        public DbSet<Favorite> Favorites { get; set; } = default!;

        public DbSet<Image> Images { get; set; } = default!;

        public DbSet<Invoice> Invoices { get; set; } = default!;

        public DbSet<InvoiceDetail> InvoiceDetails { get; set; } = default!;

        public DbSet<ModPhone> ModPhones { get; set; } = default!;

        public DbSet<PaymentMethod> PaymentMethods { get; set; } = default!;
        public DbSet<Phone> Phones { get; set; } = default!;

        public DbSet<Promotion> Promotions { get; set; } = default!;

        public DbSet<SlideShow> SlideShows { get; set; } = default!;

        public DbSet<Vote> Votes { get; set; } = default!;

        public DbSet<Historys> Historys { get; set; } = default!;

        public DbSet<Notification> Notifications { get; set; } = default!;

        public DbSet<NotificationAdmin> NotificationsAdmins { get; set; } = default!;

        public static implicit operator EPhoneShopIdentityContext(NotificationRepository v)
        {
            throw new NotImplementedException();
        }
    }
}
