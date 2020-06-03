using System;
using System.Collections.Generic;
using System.Text;
using PRP_Project.DAL.Entities;

namespace PRP_Project.BL.DTO
{
    public class ModuleDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public Translation[] Translations { get; set; }

        public string Username { get; set; }
    }
}
