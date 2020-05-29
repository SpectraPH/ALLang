﻿namespace ALLang.DAL.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string ProfileImage { get; set; }

        public User(string email, string login, string password)
        {
            Email = email;
            Login = login;
            Password = password;
        }
    }
}