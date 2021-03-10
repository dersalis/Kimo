using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace api.Models
{
    public class Movie
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Nazwa nie moze byc pusta")]
        public string Name { get; set;}
        [Required(ErrorMessage = "Język nie moze byc pusty")]
        public string Language { get; set; }
        [Required(ErrorMessage = "Ocena nie moze byc pusta")]
        public double Rating { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageUrl { get; set; }
        
        // public int Time { get; set; }
    }
}