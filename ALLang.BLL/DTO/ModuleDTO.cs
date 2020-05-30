using ALLang.DAL.Entities;

namespace ALLang.BLL.DTO
{
    public class ModuleDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public Translation[] Translations { get; set; }

        public string Username { get; set; }
    }
}