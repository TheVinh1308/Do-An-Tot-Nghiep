using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using server_api.Models;

namespace API_Server.Models
{
    public class Cart
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        // Reference navigation property cho khóa ngoại đến User
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int PhoneId { get; set; }

        // Reference navigation property cho khóa ngoại đến Product
        public Phone Phone { get; set; }

        public int Quantity { get; set; }

        public Cart()
        {
            Quantity = 1;
        }
    }
}
