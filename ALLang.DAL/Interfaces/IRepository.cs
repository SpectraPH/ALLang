using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using PRP_Project.DAL.Entities;

namespace PRP_Project.DAL.Interfaces
{
    public interface IRepository
    {
        IEnumerable<Module> GetAllModules();
        IEnumerable<Module> GetAllUsersModules(string username);
        Module GetModuleById(int id);
        void SaveModule(Module module, User user);
        void UpdateModule(Module module);
        void DeleteModule(int id);

        List<Translation> GetAllTranslations();

        IEnumerable<User> GetAllUsers();
        User GetUser(string login);
        void SaveUser(User user);
        public void UpdateUser(User user, IFormFile file);
    }
}