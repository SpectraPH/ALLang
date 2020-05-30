using System.Collections.Generic;

namespace ALLang.DAL.Entities
{
    public class Translation
    {
        public int TranslationId { get; set; }

        public string Word { get; set; }
        public string WordTranslation { get; set; }
        public string ImageURL { get; set; }

        public IList<ModuleTranslation> ModuleTranslations { get; set; }

        public Translation(string word, string wordTranslation, string imageUrl)
        {
            Word = word;
            WordTranslation = wordTranslation;
            ImageURL = imageUrl;
        }

        public Translation() {}

        public override bool Equals(object? obj)
        {
            Translation translation = (Translation) obj;
            return translation != null &&
                   (Word.Equals(translation.Word) && 
                    WordTranslation.Equals(translation.WordTranslation));
        }
    }
}