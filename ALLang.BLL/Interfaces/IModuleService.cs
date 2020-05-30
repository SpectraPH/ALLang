using System.Collections.Generic;
using ALLang.BLL.DTO;

namespace ALLang.BLL.Interfaces
{
    interface IModuleService
    {
        IEnumerable<ModuleDTO> GetAllModules();
        IEnumerable<ModuleDTO> GetAllUsersModules(string username);
        ModuleDTO GetModuleById(int id);
        void SaveModule(ModuleDTO module);
        void UpdateModule(ModuleDTO module);
        void DeleteModule(int id);
    }
}
