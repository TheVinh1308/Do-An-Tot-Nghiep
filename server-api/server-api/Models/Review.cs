using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using server_api.Models;
namespace API_Server.Models
{
    public class Review
    {
        public int Id { get; set; }

        public string UserId {  get; set; }
        [ForeignKey("UserId")]
        public  User User{ get; set; }

        public int ModPhoneId { get; set; }

        // Navigation reference property cho khóa ngoại đến Product
        public ModPhone ModPhone { get; set; }
        public double Rate { get; set; }
        public string Content {  get; set; }
        public string Path { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
        public DateTime DateReview { get; set; }
        public bool Status {  get; set; }

        public Review()
        {
            Status = true;
        }

    }
}
