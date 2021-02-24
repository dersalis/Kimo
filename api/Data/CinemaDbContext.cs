using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class CinemaDbContext : DbContext
    {
        public CinemaDbContext(DbContextOptions<CinemaDbContext> options) : base(options)
        {
            
        }

        public DbSet<Movie> Movies { get; set; }
        
        
    }
}