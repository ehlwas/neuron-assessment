using dotnet_technical_evaluation.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_technical_evaluation.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<Policy> Policies { get; set; }
    }
}
