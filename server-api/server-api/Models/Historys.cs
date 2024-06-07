using API_Server.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server_api.Models
{
    public class Historys
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public string Action { get; set; }
        public DateTime Time { get; set; }

        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Phone Phone { get; set; }

        public string Operation { get; set; }
        public int Amount { get; set; }

    }
}
