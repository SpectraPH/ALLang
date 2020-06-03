namespace PRP_Project.DAL.Entities
{
    public class ModuleUser
    {
        public int ModuleId { get; set; }
        public Module Module { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}