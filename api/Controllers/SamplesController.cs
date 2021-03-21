using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class SamplesController : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles = "User")]
        public string Get()
        {
            return "Hello. Strona uzytkownika!";
        }


        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public string Get(int id)
        {
            return "Hello. Strona administratora!";
        }
    }
}