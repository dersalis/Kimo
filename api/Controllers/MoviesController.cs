using System.Collections.Generic;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private static List<Movie> movies = new List<Movie> {
            new Movie {
                Id = 0,
                Name = "Star Wars",
                Language = "English"
            },
            new Movie {
                Id = 1,
                Name = "Matrix",
                Language = "English"
            },
            new Movie {
                Id = 2,
                Name = "Jurasic Park",
                Language = "English"
            }
        };

        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return movies;
        }


        [HttpPost]
        public void Post([FromBody] Movie movie)
        {
            movies.Add(movie);
        }


        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Movie movie)
        {
            movies[id] = movie;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            movies.RemoveAt(id);
        }

    }
}