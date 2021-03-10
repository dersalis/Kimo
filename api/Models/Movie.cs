using System;
using System.Collections.Generic;
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
        public string Description { get; set; }
        public string Language { get; set; }
        public string Duration { get; set; } 
        public DateTime PlayingDate { get; set; }
        public DateTime PlayingTime { get; set; }                
        [Required(ErrorMessage = "Ocena nie moze byc pusta")]
        public double Rating { get; set; }
        public string Genre { get; set; }
        public string TrailorUrl { get; set; }
        public string ImageUrl { get; set; }
        
        [NotMapped]
        public IFormFile Image { get; set; }

        public ICollection<Reservation> Reservations { get; set; }  
    }
}