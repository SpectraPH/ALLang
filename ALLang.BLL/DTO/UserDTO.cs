using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace PRP_Project.BL.DTO
{
    public class UserDTO
    {
        public string Email { get; set; }
        public string Login { get; set; }
        public IFormFile image { get; set; }
    }
}
