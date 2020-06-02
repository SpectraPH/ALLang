using Microsoft.AspNetCore.Http;

namespace ALLang.BLL.DTO
{
    public class UserDTO
    {
        public string Email { get; set; }
        public string Login { get; set; }
        public IFormFile image { get; set; }
    }
}