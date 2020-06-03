using System.Collections.Generic;
using System.Linq;
using PRP_Project.BL.DTO;
using PRP_Project.BL.Enums;
using PRP_Project.BL.Interfaces;
using PRP_Project.DAL;
using PRP_Project.DAL.Entities;

namespace PRP_Project.BL.Services
{
    public class UserService : IUserSerice
    {
        private Repository repository;

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
                if(item.Email == user.Email)
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
            repository.UpdateUser(_user,user.image);
        }
    }
}