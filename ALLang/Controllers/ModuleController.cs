﻿using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PRP_Project.BL.DTO;
using PRP_Project.BL.Services;

namespace PRP_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ModuleController : ControllerBase
    {
        private ModuleService moduleService;

        public ModuleController()
        {
            this.moduleService = new ModuleService();
        }
        
        [Authorize]
        [HttpGet("/allmodules")]
        public IEnumerable GetAllModules()
        {
            return moduleService.GetAllModules();
        }
        
        [Authorize]
        [HttpGet]
        public IEnumerable GetAllUsersModules()
        {
            var user = User.Identity.Name;
            return moduleService.GetAllUsersModules(user);
        }

        [HttpGet("{id}")]
        public ModuleDTO GetModuleById(int id)
        {
            return moduleService.GetModuleById(id);
        }

        [HttpPost]
        public void SaveModule(ModuleDTO module)
        {
            moduleService.SaveModule(module);
        }

        [HttpPut]
        public void UpdateModule(ModuleDTO module)
        {
            moduleService.UpdateModule(module);
        }

        [HttpDelete("{id}")]
        public void DeleteModule(int id)
        {
            moduleService.DeleteModule(id);   
        }
    }
}