using System;
using System.IO;
using System.Linq;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private CinemaDbContext _dbContext;

        public MoviesController(CinemaDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET api/movies/getmovies
        [Authorize]
        [HttpGet("[action]")]
        public IActionResult GetMovies(string sort, int? pageNumber, int? pageSize)
        {
            var currPageNumber = pageNumber ?? 1;
            var currPageSize = pageSize ?? 5;

            var movies = _dbContext.Movies.Select(m => new MovieShortViewModel {
                Id = m.Id,
                Name = m.Name,
                Duration = m.Duration,
                Language = m.Language,
                Rating = m.Rating,
                Genre = m.Genre,
                ImageUrl = m.ImageUrl
            }).Skip((currPageNumber - 1) * currPageSize).Take(currPageSize);

            switch(sort)
            {
                case "desc":
                    return Ok(movies.OrderByDescending(m => m.Rating));
                case "asc":
                    return Ok(movies.OrderBy(m => m.Rating));
                default:
                    return Ok(movies);
            }
        }


        // GET api/movies/moviedetail/2
        [Authorize]
        [HttpGet("[action]/{id}")]
        public IActionResult MovieDetail(int id)
        {
            var movie = _dbContext.Movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }


        // GET api/movies/findmovies?movieName=Rambo
        [Authorize]
        [HttpGet("[action]")]
        public IActionResult FindMovies(string movieName)
        {
            var movies = _dbContext.Movies.Where(m => m.Name.StartsWith(movieName)).Select(m => new MovieShortViewModel {
                Id = m.Id,
                Name = m.Name,
                Duration = m.Duration,
                Language = m.Language,
                Rating = m.Rating,
                Genre = m.Genre,
                ImageUrl = m.ImageUrl
            });

            return Ok(movies);
        }


        // POST api/movies
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post([FromForm] Movie movie)
        {
            var guid = new Guid();
            var filePath = Path.Combine("wwwroot", guid + ".jpg");

            if (movie.Image != null)
            {
                var fileStream = new FileStream(filePath, FileMode.Create);
                movie.Image.CopyTo(fileStream);
            }

            movie.ImageUrl = filePath.Remove(0, 7);

            _dbContext.Movies.Add(movie);
            _dbContext.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }


        // PUT api/movies/3
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] Movie movie)
        {
            var movieToPut = _dbContext.Movies.Find(id);
            if(movieToPut == null) 
            {
                return NotFound($"Brak rekordu o id {id}");
            }

            var guid = new Guid();
            var filePath = Path.Combine("wwwroot", guid + ".jpg");

            if(movie.Image != null) {
                var fileStream = new FileStream(filePath, FileMode.Create);
                movie.Image.CopyTo(fileStream);
                movieToPut.ImageUrl = filePath.Remove(0, 7);
            }

            movieToPut.Name = movie.Name;
            movieToPut.Description = movie.Description;
            movieToPut.Language = movie.Language;
            movieToPut.Duration = movie.Duration;
            movieToPut.PlayingDate = movie.PlayingDate;
            movieToPut.PlayingTime = movie.PlayingTime;
            movieToPut.Rating = movie.Rating;
            movieToPut.Genre = movie.Genre;
            movieToPut.TrailorUrl = movie.TrailorUrl;
            movieToPut.TicketPrice = movie.TicketPrice;

            _dbContext.SaveChanges();

            return Ok($"Zaktualizowano rekord {id}.");
        }


        // DELETE api/movies/3
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var movie = _dbContext.Movies.Find(id);
            if(movie == null) 
            {
                return NotFound($"Brak rekordu o id {id}");
            }
            _dbContext.Movies.Remove(movie);
            _dbContext.SaveChanges();

            return Ok($"Usunięto rekord o id {id}.");
        }

    }
}