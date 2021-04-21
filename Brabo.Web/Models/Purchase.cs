using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Brabo.Web.Models
{
    public class Purchase
    {
        public int PurchaseId { get; set; }
        public string Person { get; set; }
        public string Adress { get; set; }
        public int ProductId { get; set; }
        public DateTime Date { get; set; }
    }
}