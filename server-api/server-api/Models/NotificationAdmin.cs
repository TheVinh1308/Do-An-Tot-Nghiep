using API_Server.Models;

namespace server_api.Models
{
    public class NotificationAdmin
    {
        public int id { get; set; }
        public string content { get;  set; }
        public string url { get; set; }
        public DateTime time { get; set; }

        public int InvoiceId { get; set; }

        // Reference navigation property cho khóa ngoại đến Invoice
        public Invoice Invoice { get; set; }
        public bool status { get; set; }
    }
}
