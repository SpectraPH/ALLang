using ALLang.BLL.DTO;
using ALLang.BLL.Enums;
using ALLang.BLL.Interfaces;
using ALLang.DAL;
using ALLang.DAL.Entities;
using ALLang.DAL.Interfaces;

namespace ALLang.BLL.Services
{
    public class UserService : IUserService
    {
        private IRepository repository;

        public UserService()
        {
            this.repository = new Repository();
        }

        public User GetUser(string login)
        {
            return repository.GetUser(login);
        }

        public User Login(string login, string password)
        {
            var user = repository.GetUser(login);
            if (user != null && user.Password == password)
            {
                return user;
            }

            return null;
        }

        public RegistrationResult Registration(User user)
        {
            var users = repository.GetAllUsers();

            foreach (var item in users)
            {
                if (item.Login == user.Login)
                    return RegistrationResult.LoginAlreadyExist;
                if (item.Email == user.Email)
                    return RegistrationResult.EmailAlreadyExist;
            }
            repository.SaveUser(user);
            return RegistrationResult.OK;
        }

        public void UpdateUser(UserDTO user)
        {
            User _user = new User
            {
                Login = user.Login,
                Email = user.Email
            };
            repository.UpdateUser(_user, user.image);
        }
    }
}