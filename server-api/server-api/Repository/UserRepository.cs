using API_Server.Models;
using EshopIdentity.Models;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using server_api.Interface;
using server_api.Models;
using server_api.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;

using System.Text;

namespace server_api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IEmailSender _emailSender;

        public UserRepository(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IHttpContextAccessor httpContextAccessor, IEmailSender emailSender)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
            _emailSender = emailSender;
        }

        public async Task<List<User>> GetAllUserAsync()
        {
            return await _userManager.Users.ToListAsync();
        }

        public async Task<User> GetUserAsync(string id)
        {
            var user = await _userManager.Users.Where(u => u.Id == id).FirstOrDefaultAsync();

            return user;
        }

        public async Task<int> CountCustomerAsync()
        {
            var role = await _roleManager.FindByNameAsync("user");
            if (role == null)
            {
                return 0;
            }

            var usersInRole = await _userManager.GetUsersInRoleAsync("user");
            return usersInRole.Count;
        }

        public async Task<List<IdentityRole>> ListRole()
        {
            var roles = await _roleManager.Roles.ToListAsync();
            return roles;
        }

        public async Task<string> LoginAsync([Bind("Username", "Password")] LoginModel account)
        {
            var user = await _userManager.FindByNameAsync(account.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, account.Password))
            {
                if (!user.EmailConfirmed)
                {
                    return (StatusCodes.Status403Forbidden).ToString();
                }
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.GivenName, user.Fullname),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }

            return null;
        }

        public async Task<string> RegisterAdminAsync([Bind("Username", "Password", "Fullname", "Email", "Phone")] RegisterModel account)
        {
            var userExists = await _userManager.FindByNameAsync(account.Username);
            if (userExists != null)
                return null;

            User user = new User()
            {
                Email = account.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = account.Username,
                Fullname = account.Fullname,
                PhoneNumber = account.Phone,
            };
            var result = await _userManager.CreateAsync(user, account.Password);
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var request = _httpContextAccessor.HttpContext.Request;
            var callbackUrl = $"{request.Scheme}://{request.Host}/api/Users/confirmemail?userId={user.Id}&code={Uri.EscapeDataString(code)}";

            await _emailSender.SendEmailAsync(
            user.Email,
            "Chào mừng bạn đến với 2VPHONE",
            $"<p style=\"font-size: 16px;\">Cám ơn bạn đã sử dụng dịch vụ của chúng tôi</p>" +
            $"<p style=\"font-size: 16px;\">Ấn vào nút <a href=\"{callbackUrl}\" style=\"font-size: 16px;\">này</a> để trở lại trang web! Cảm ơn</p>"
            );
            if (!result.Succeeded)
                return null;

            if (!await _roleManager.RoleExistsAsync("Admin"))
                await _roleManager.CreateAsync(new IdentityRole("Admin"));
            if (!await _roleManager.RoleExistsAsync("User"))
                await _roleManager.CreateAsync(new IdentityRole("User"));

            if (await _roleManager.RoleExistsAsync("Admin"))
            {
                await _userManager.AddToRoleAsync(user, "Admin");
            }
            return result.Succeeded.ToString();
        }

        public async Task<string> RegisterAsync([Bind("Username", "Password", "Fullname", "Email", "Phone")] RegisterModel account)
        {
            var userExists = await _userManager.FindByNameAsync(account.Username);
            if (userExists != null)
                return null;

            User user = new User()
            {
                Email = account.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = account.Username,
                Fullname = account.Fullname,
                PhoneNumber = account.Phone,
            };
            var result = await _userManager.CreateAsync(user, account.Password);
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var request = _httpContextAccessor.HttpContext.Request;
            var callbackUrl = $"{request.Scheme}://{request.Host}/api/Users/confirmemail?userId={user.Id}&code={Uri.EscapeDataString(code)}";

            await _emailSender.SendEmailAsync(
            user.Email,
            "Chào mừng bạn đến với 2VPHONE",
            $"<p style=\"font-size: 16px;\">Cám ơn bạn đã sử dụng dịch vụ của chúng tôi</p>" +
            $"<p style=\"font-size: 16px;\">Ấn vào nút <a href=\"{callbackUrl}\" style=\"font-size: 16px;\">này</a> để trở lại trang web! Cảm ơn</p>"
            );

            if (!result.Succeeded)
                return null; // User creation failed
            if (await _roleManager.RoleExistsAsync("User"))
            {
                await _userManager.AddToRoleAsync(user, "User");
            }

            return result.Succeeded.ToString();

        }

        public async Task<string> GoogleLoginAsync([FromBody] GoogleLoginModel account)
        {

            var user = await _userManager.FindByEmailAsync(account.Email);
            if (user == null)
            {
                user = new User
                {
                    Email = account.Email,
                    Fullname = account.Fullname,
                    UserName = account.Email,
                    SecurityStamp = Guid.NewGuid().ToString()
                };

                var result = await _userManager.CreateAsync(user);
                if (!result.Succeeded)
                    return null;

                if (await _roleManager.RoleExistsAsync("User"))
                {
                    await _userManager.AddToRoleAsync(user, "User");
                }
            }

            var userRoles = await _userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.GivenName, user.Fullname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<IActionResult> ConfirmEmailAsync(string userId, string code)
        {

            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(code))
            {
                return new BadRequestObjectResult("Invalid confirmation request.");
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return new NotFoundObjectResult("User not found.");
            }

            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                var redirectUrl = "http://localhost:3000/login";
                return new RedirectResult(redirectUrl);
            }
            else
            {
                return new BadRequestObjectResult("Error confirming email.");
            }
        }

    }
}