using System.Reflection;
using ALLang.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace ALLang.DAL
{
    public class DataBase : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=ALLang;Trusted_Connection=True");
        }
    }
}