using Brabo.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Brabo.Web.Controllers
{
    public class HomeController : Controller
    {
        ProductContext db = new ProductContext();
        // GET: Home
        public ActionResult Index()
        {
            var products = db.Products;
            ViewBag.Products = products;
            return View();
        }
        [HttpGet] //GET
        public ActionResult Buy(int id)
        {
           
            ViewBag.ProductId = id;
            return View();
        }

        //POST
        [HttpPost] //чтобы определить какой метод должен обрабатыватьсяв в Buy.cshml
        public string Buy(Purchase purchase)
        {
            purchase.Date = DateTime.Now;
            db.Purchases.Add(purchase);
            db.SaveChanges();
            return "Thanks," + purchase.Person + "for buying";
        }
    }
}