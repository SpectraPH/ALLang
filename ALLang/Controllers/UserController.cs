﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using ALLang.BLL.DTO;
using ALLang.BLL.Enums;
using ALLang.BLL.Interfaces;
using ALLang.BLL.Services;
using ALLang.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ALLang.Controllers
{
    public class AccountController : Controller
    {
        private IUserService userService;

        public AccountController()
        {
            this.userService = new UserService();
        }

        [HttpPost("/token")]
        public IActionResult Token(string login, string password)
        {
            var identity = GetIdentity(login, password);
            if (identity == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };

            return Json(response);
        }

        [HttpPost("/registration")]
        public IActionResult Registration(string email, string login, string password)
        {
            var registrationResult = userService.Registration(new User(email, login, password));
            switch (registrationResult)
            {
                case RegistrationResult.OK:
                    return StatusCode(200);
                case RegistrationResult.LoginAlreadyExist:
                    return StatusCode(600);
                case RegistrationResult.EmailAlreadyExist:
                    return StatusCode(601);
            }

            return StatusCode(400);
        }

        [HttpGet("/user/{login}")]
        public IActionResult GetUserInfo(string login)
        {
            return Json(userService.GetUser(login));
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            User person = userService.Login(username, password);
            if (person != null)
            {
                var claims = new List<Claim>
                    {
                        new Claim(ClaimsIdentity.DefaultNameClaimType, person.Login)
                    };
                ClaimsIdentity claimsIdentity =
                    new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                        ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            return null;
        }
    }
}