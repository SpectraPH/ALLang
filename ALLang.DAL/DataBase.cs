using ALLang.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace ALLang.DAL
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
            optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=ALLang;Trusted_Connection=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ModuleTranslation>().HasKey(x => new { x.ModuleId, x.TranslationId });
            modelBuilder.Entity<ModuleUser>().HasKey(x => new { x.ModuleId, x.UserId });
        }
    }
}