using System.Collections.Generic;
using PRP_Project.BL.DTO;

namespace PRP_Project.BL.Interfaces
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
