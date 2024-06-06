using API_Server.Models;
using EshopIdentity.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server_api.Interface;
using server_api.Models;

namespace server_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([Bind("Username", "Password")] LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var token = await _userRepository.LoginAsync(model);
                if (token != null)
                {
                    return Ok(new { token });
                }
                else
                {
                    return Unauthorized();
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([Bind("Username", "Password", "Fullname", "Email", "Phone")] RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var token = await _userRepository.RegisterAsync(model);
            if (token != null)
            {
                return Ok(new { Message = "Đăng ký thành công.!!!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Đăng ký thất bại." });
            }
        }
        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([Bind("Username", "Password", "Fullname", "Email", "Phone")] RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var token = await _userRepository.RegisterAdminAsync(model);
            if (token != null)
            {
                return Ok(new { Message = "Đăng ký admin thành công.!!!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = "Đăng ký admin thất bại." });
            }
        }



    }
}
