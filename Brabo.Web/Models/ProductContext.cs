using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Brabo.Web.Models
{
    public class ProductContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
    }
    public class ProductBdInitializer : DropCreateDatabaseAlways<ProductContext>
    {
        protected override void Seed(ProductContext db)
        {
            db.Products.Add(new Product { Name = "Royal Canin", Volume = "1 kg", Price = 200});
            db.Products.Add(new Product { Name = "Pro Plan", Volume = "1 kg", Price = 250 });
            db.Products.Add(new Product { Name = "Fitmin", Volume = "1 kg", Price = 230 });

            base.Seed(db);

        }
    }
}