using System.Collections.Generic;
using ALLang.DAL.Entities;

namespace ALLang.DAL.Interfaces
{
    public interface IRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUser(string login);
        void SaveUser(User user);
    }
}