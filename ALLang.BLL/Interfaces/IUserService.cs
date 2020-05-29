using ALLang.BLL.Enums;
using ALLang.DAL.Entities;

namespace ALLang.BLL.Interfaces
{
    public interface IUserService
    {
        User GetUser(string login);
        User Login(string login, string password);
        RegistrationResult Registration(User user);
    }
}