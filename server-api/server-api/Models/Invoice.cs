﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using server_api.Models;

namespace API_Server.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        public string Code { get; set; }
        [ForeignKey("UserId")]
        public string UserId { get; set; }

        // Reference navigation property cho khóa ngoại đến User
       
        public User User { get; set; }

        public DateTime IssuedDate { get; set; }
        public int PaymentMethodId { get; set; }

        public PaymentMethod PaymentMethod { get; set; }

        public string ShippingAddress { get; set; }

        public string ShippingPhone { get; set; }

        [DefaultValue(0)]
        public int Total { get; set; }

        //public int PaymentMethodId { get; set; }
        //public PaymentMethod PaymentMethod { get; set; }



        public int Status { get; set; }

       
    }
}
