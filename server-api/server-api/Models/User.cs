using Microsoft.AspNetCore.Identity;

namespace server_api.Models
{
    public class User : IdentityUser
    {
        public string Fullname { get; set; }
    }
}
