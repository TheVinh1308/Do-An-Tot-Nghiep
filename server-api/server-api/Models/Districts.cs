namespace server_api.Models
{
    public class Districts
    {
        public int id { get; set; }
        public int provinceId { get; set; }
        public Provinces provinces { get; set; }
        public string name { get; set; }
    }
}
