using System.Collections.Generic;
using api.Data;
using api.Models;
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

        // GET api/movies
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _dbContext.Movies;
        }

        // GET api/movies/3
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            var movie = _dbContext.Movies.Find(id);

            return movie;
        }

        // POST api/movies
        [HttpPost]
        public void Post([FromBody] Movie movie)
        {
            _dbContext.Movies.Add(movie);
            _dbContext.SaveChanges();
        }

        // PUT api/movies/3
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Movie movie)
        {
            var movieToPut = _dbContext.Movies.Find(id);
            movieToPut.Name = movie.Name;
            movieToPut.Language = movie.Language;
            _dbContext.SaveChanges();
        }

        // DELETE api/movies/3
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var movie = _dbContext.Movies.Find(id);
            _dbContext.Movies.Remove(movie);
            _dbContext.SaveChanges();
        }

    }
}