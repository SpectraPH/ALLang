using System.Collections.Generic;

namespace PRP_Project.DAL.Entities
{
    public class Module
    {
        public int ModuleId { get; set; }
        public string Title { get; set; }

        public IList<ModuleTranslation> ModuleTranslations { get; set; }
        public IList<ModuleUser> ModuleUser { get; set; }
    }
}