﻿namespace server_api.Models
{
    public class PaymentMethod
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool Status { get; set; }

        public PaymentMethod()
        {
            Status = true;
        }
    }
}
