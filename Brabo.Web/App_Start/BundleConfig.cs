using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Brabo.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //Bootstrap style
            bundles.Add(new StyleBundle("~/bundles/bootstrap/css").Include(
                     "~/Content/bootstrap.min.css", new CssRewriteUrlTransform()));
            //Bootstrap
            bundles.Add(new StyleBundle("~/bundles/bootstrap/js").Include(
                      "~/Script/bootstrap.min.js"));


            bundles.Add(new StyleBundle("~/bundles/main/css").Include(
                 "~/Content/main.css", new CssRewriteUrlTransform()));

            bundles.Add(new StyleBundle("~/bundles/mainJS/js").Include(
                    "~/Script/mainJS.js"));
        }
    }
}