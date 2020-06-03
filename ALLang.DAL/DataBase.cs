using Microsoft.EntityFrameworkCore;
using PRP_Project.DAL.Entities;

namespace PRP_Project.DAL
{
    public class DataBase : DbContext
    {
        public DbSet<Module> Modules { get; set; }
        public DbSet<Translation> Translations { get; set; }
        public DbSet<ModuleTranslation> ModuleTranslations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ModuleUser> ModuleUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
           //optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=PRP_Project;Trusted_Connection=True");
           optionsBuilder.UseSqlServer("Data Source=SQL5059.site4now.net;Initial Catalog=DB_A62642_SpectraPH;User Id=DB_A62642_SpectraPH_admin;Password=18253kr!;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ModuleTranslation>().HasKey(x => new {x.ModuleId, x.TranslationId});
            modelBuilder.Entity<ModuleUser>().HasKey(x => new {x.ModuleId, x.UserId});
        }
        
        
    }
}