using Microsoft.AspNetCore.Mvc;

namespace ALLang.PL.Controllers
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
    }
}