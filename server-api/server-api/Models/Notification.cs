using API_Server.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server_api.Models
{
    public class Notification
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        public int PhoneId { get; set; }

        public Phone Phone { get; set; }

        public DateTime Time { get; set; }

        public bool status { get; set; }

        public Notification() // Parameterless constructor
        {
            status = true;
        }
    }
}
