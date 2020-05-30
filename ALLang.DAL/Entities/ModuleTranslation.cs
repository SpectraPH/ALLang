namespace ALLang.DAL.Entities
{
    public class ModuleTranslation
    {
        public int ModuleId { get; set; }
        public Module Module { get; set; }

        public int TranslationId { get; set; }
        public Translation Translation { get; set; }
        
        
        
    }
}