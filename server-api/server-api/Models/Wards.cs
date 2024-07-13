namespace server_api.Models
{
    public class Wards
    {
        public int id { get; set; }
        public int districtId { get; set; }
        public Districts districts { get; set; }
        public string name { get; set; }
    }
}
