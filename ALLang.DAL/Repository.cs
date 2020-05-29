using System.Collections.Generic;
using ALLang.DAL.Entities;
using System.Linq;
using ALLang.DAL.Interfaces;

namespace ALLang.DAL
{
    public class Repository : IRepository
    {
        private DataBase context;

        public Repository()
        {
            this.context = new DataBase();
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