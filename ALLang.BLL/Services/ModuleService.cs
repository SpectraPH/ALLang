using System.Collections.Generic;
using System.Linq;
using ALLang.BLL.DTO;
using ALLang.BLL.Interfaces;
using ALLang.DAL;
using ALLang.DAL.Entities;

namespace ALLang.BLL.Services
{
    public class ModuleService : IModuleService
    {
        private Repository repository;

        public ModuleService()
        {
            this.repository = new Repository();
        }

        public IEnumerable<ModuleDTO> GetAllModules()
        {
            var modules = repository.GetAllModules();
            var res = modules.Select(m => new ModuleDTO()
            {
                Title = m.Title,
                Id = m.ModuleId,
                Translations = m.ModuleTranslations
                    .Select(t => new Translation(t.Translation.Word, t.Translation.WordTranslation,t.Translation.ImageURL))
                    .ToArray()
            });

            return res;
        }

        public IEnumerable<ModuleDTO> GetAllUsersModules(string username)
        {
            var list = repository.GetAllUsersModules(username).ToList();
            var res = list.Select(m => new ModuleDTO()
            {
                Title = m.Title,
                Id = m.ModuleId,
                Translations = m.ModuleTranslations
                    .Select(t => new Translation(t.Translation.Word, t.Translation.WordTranslation,t.Translation.ImageURL))
                    .ToArray()
            });

            return res;
        }

        public ModuleDTO GetModuleById(int id)
        {
            var module = repository.GetModuleById(id);
            ModuleDTO res = new ModuleDTO()
            {
                Title = module.Title,
                Id = module.ModuleId,
                Translations = module.ModuleTranslations
                    .Select(t => new Translation(t.Translation.Word, t.Translation.WordTranslation,t.Translation.ImageURL)).ToArray()
            };

            return res;
        }

        public void SaveModule(ModuleDTO module)
        {
            var newModule = new Module() {Title = module.Title};
            newModule.ModuleTranslations = new List<ModuleTranslation>();
            List<Translation> translations = repository.GetAllTranslations();

            foreach (var translation in module.Translations)
            {
                foreach (var translationFromDatabase in translations)
                {
                    if (translationFromDatabase.Word.Equals(translation.Word) &&
                        translationFromDatabase.WordTranslation.Equals(translation.WordTranslation))
                    {
                        newModule.ModuleTranslations.Add(new ModuleTranslation()
                        {
                            Translation = translationFromDatabase,
                            Module = newModule
                        });
                        goto loop;
                    }
                }

                newModule.ModuleTranslations.Add(new ModuleTranslation()
                {
                    Translation = translation,
                    Module = newModule
                });
                loop: ;
            }

            var user = repository.GetAllUsers().Single(u => u.Login == module.Username);
            
            repository.SaveModule(newModule, user);
        }

        public void UpdateModule(ModuleDTO module)
        {
            var moduleFromDB = repository.GetModuleById(module.Id);
            moduleFromDB.Title = module.Title;
            var translations = repository.GetAllTranslations();
            List<ModuleTranslation> moduleTranslations = new List<ModuleTranslation>();
            foreach (var translation in module.Translations)
            {
                foreach (var translationFromDB in translations)
                {
                    if (translationFromDB.Equals(translation))
                    {
                        moduleTranslations.Add(new ModuleTranslation()
                        {
                            Translation = translationFromDB,
                            Module = moduleFromDB
                        });
                        goto loop;
                    }
                }

                moduleTranslations.Add(new ModuleTranslation()
                {
                    Translation = translation,
                    Module = moduleFromDB
                });
                loop: ;
            }

            moduleFromDB.ModuleTranslations = moduleTranslations;

            repository.UpdateModule(moduleFromDB);
        }

        public void DeleteModule(int id)
        {
            repository.DeleteModule(id);
        }
    }
}