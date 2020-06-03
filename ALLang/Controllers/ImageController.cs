using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PRP_Project.Controllers
{
    [ApiController]
    public class ImageController : ControllerBase
    {

        [HttpGet("image/{image}")]
        public IActionResult GetImage(string image)
        {
            var path = System.IO.Path.GetFullPath("img/" + image);
            return PhysicalFile(path, "image/png");
        }

        [HttpGet("image/")]
        public string Test()
        {
            return "PERMOGA";
        }
    }
}