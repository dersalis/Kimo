// using System.IO;
// using System;
// using System.Collections.Generic;
// using api.Data;
// using api.Models;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;

// namespace api.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class MoviesController : ControllerBase
//     {
//         private CinemaDbContext _dbContext;

//         public MoviesController(CinemaDbContext dbContext)
//         {
//             _dbContext = dbContext;
//         }


//         // GET api/movies
//         [HttpGet]
//         public IActionResult Get()
//         {
//             return Ok(_dbContext.Movies);
//         }


//         // GET api/movies/3
//         [HttpGet("{id}")]
//         public IActionResult Get(int id)
//         {
//             var movie = _dbContext.Movies.Find(id);
//             if(movie == null) 
//             {
//                 return NotFound($"Brak rekordu o id {id}");
//             }
//             return Ok(movie);
//         }


//         // POST api/movies
//         // [HttpPost]
//         // public IActionResult Post([FromBody] Movie movie)
//         // {
//         //     _dbContext.Movies.Add(movie);
//         //     _dbContext.SaveChanges();

//         //     return StatusCode(StatusCodes.Status201Created);
//         // }


//         // POST api/movies
//         [HttpPost]
//         public IActionResult Post([FromForm] Movie movie)
//         {
//             var guid = new Guid();
//             var filePath = Path.Combine("wwwroot", guid + ".jpg");

//             if(movie.Image != null) {
//                 var fileStream = new FileStream(filePath, FileMode.Create);
//                 movie.Image.CopyTo(fileStream);
//             }
            
//             movie.ImageUrl = filePath.Remove(0, 7);

//             _dbContext.Movies.Add(movie);
//             _dbContext.SaveChanges();

//             return StatusCode(StatusCodes.Status201Created);
//         }


//         // PUT api/movies/3
//         [HttpPut("{id}")]
//         public IActionResult Put(int id, [FromForm] Movie movie)
//         {
//             var movieToPut = _dbContext.Movies.Find(id);
//             if(movieToPut == null) 
//             {
//                 return NotFound($"Brak rekordu o id {id}");
//             }

//             var guid = new Guid();
//             var filePath = Path.Combine("wwwroot", guid + ".jpg");

//             if(movie.Image != null) {
//                 var fileStream = new FileStream(filePath, FileMode.Create);
//                 movie.Image.CopyTo(fileStream);
//                 movieToPut.ImageUrl = filePath.Remove(0, 7);
//             }

//             movieToPut.Name = movie.Name;
//             movieToPut.Language = movie.Language;
//             movieToPut.Rating = movie.Rating;
//             _dbContext.SaveChanges();

//             return Ok($"Zaktualizowano rekord {id}.");
//         }


//         // DELETE api/movies/3
//         [HttpDelete("{id}")]
//         public IActionResult Delete(int id)
//         {
//             var movie = _dbContext.Movies.Find(id);
//             if(movie == null) 
//             {
//                 return NotFound($"Brak rekordu o id {id}");
//             }
//             _dbContext.Movies.Remove(movie);
//             _dbContext.SaveChanges();

//             return Ok($"Usunięto rekord o id {id}.");
//         }

//     }
// }