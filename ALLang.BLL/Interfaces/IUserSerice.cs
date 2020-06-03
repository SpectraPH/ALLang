using System.Collections.Generic;
using PRP_Project.BL.Enums;
using PRP_Project.DAL.Entities;

namespace PRP_Project.BL.Interfaces
{
    public interface IUserSerice
    {
        User GetUser(string login);
        User Login(string login, string password);
        RegistrationResult Registration(User user);
    }
}