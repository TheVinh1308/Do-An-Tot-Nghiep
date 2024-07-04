namespace server_api.Models
{
    public class PaymentInformationModel
    {
        public string UserId { get; set; }
        public string OrderType { get; set; }
        public double Amount { get; set; }
        public string OrderDescription { get; set; }
        public string Name { get; set; }
    }
}
