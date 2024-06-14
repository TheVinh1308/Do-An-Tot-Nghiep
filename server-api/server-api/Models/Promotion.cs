using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
namespace API_Server.Models
{
    public class Promotion
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }

        public double DiscountPercent { get; set; }

        public DateTime StartDay { get; set; }
        public DateTime EndDay { get; set; }
        public bool Status {  get; set; }

        //public Promotion()
        //{
        //    UpdateStatus();
        //    if (Id == 1)
        //    {
        //        Status = true;
        //    }
        //    Status = false;
        //}
        //private void UpdateStatus()
        //{
        //    if (DateTime.Now >= StartDay && DateTime.Now <= EndDay)
        //    {
        //        Status = true;
        //    }
        //    else
        //    {
        //        Status = false;
        //    }
        //}
    }
}
