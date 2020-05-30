using System;
using System.Collections.Generic;
using System.IO;
using ALLang.DAL.Entities;
using System.Linq;
using System.Net;
using ALLang.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ALLang.DAL
{
    public class Repository : IRepository
    {
        private DataBase context;

        public Repository()
        {
            this.context = new DataBase();
        }

        public IEnumerable<Module> GetAllModules()
        {
            var list = context.Modules.Include(m => m.ModuleTranslations)
                .ThenInclude(t => t.Translation)
                .ToList();

            return list;
        }

        public IEnumerable<Module> GetAllUsersModules(string username)
        {
            var list = context.ModuleUsers.Where(m => m.User.Login == username)
                .Include(x => x.Module)
                .ThenInclude(t => t.ModuleTranslations)
                .ThenInclude(t => t.Translation)
                .Include(u => u.User)
                .Where(u => u.User.Login == username);
            var res = list.Select(x => x.Module);

            return res;
        }

        public Module GetModuleById(int id)
        {
            var module = context.Modules
                .Include(m => m.ModuleTranslations)
                .ThenInclude(t => t.Translation)
                .Single(m => m.ModuleId == id);

            return module;
        }

        public void SaveModule(Module module, User user)
        {
            var moduleUser = new ModuleUser()
            {
                Module = module,
                User = user
            };


            using (WebClient client = new WebClient())
            {
                foreach (var item in module.ModuleTranslations)
                {
                    var url = item.Translation.ImageURL;
                    if (url != null)
                    {

                        var fileName = url.GetHashCode().ToString() + ".png";
                        var path = Path.GetFullPath("img/" + fileName);
                        client.DownloadFile(new Uri(url), path);

                        item.Translation.ImageURL = fileName;
                    }
                }
            }

            context.ModuleUsers.Add(moduleUser);
            context.Modules.Add(module);
            context.SaveChanges();
        }

        public void UpdateModule(Module module)
        {
            context.Modules.Update(module);
            context.SaveChanges();
        }

        public void DeleteModule(int id)
        {
            Module module = context.Modules.Single(m => m.ModuleId == id);
            context.Modules.Remove(module);
            context.SaveChanges();
        }

        public List<Translation> GetAllTranslations()
        {
            return context.Translations.ToList();
        }

        public IEnumerable<User> GetAllUsers()
        {
            return context.Users.ToList();
        }

        public User GetUser(string login)
        {
            return context.Users.FirstOrDefault(x => x.Login == login);
        }

        public void SaveUser(User user)
        {
            List<User> users = context.Users.ToList();
            if (!ContainUser(users, user.Login))
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
        }

        private bool ContainUser(List<User> users, string email)
        {
            foreach (var user in users)
            {
                if (user.Login == email)
                {
                    return true;
                }
            }
            return false;
        }
    }
}