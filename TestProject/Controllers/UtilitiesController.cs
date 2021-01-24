using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Options;
using TestProject.Configuration;

namespace TestProject.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UtilitiesController : ControllerBase
    {
        
        private readonly bool EXT_IP_Enabled;
        public UtilitiesController(IOptions<Settings> settings)
        {
            EXT_IP_Enabled = settings.Value.EnablePortForwarding;
        }

        [HttpGet("getIP")]
        public IActionResult GetIP()
        {
            string ip;
            if (EXT_IP_Enabled)
            {
                ip = new System.Net.WebClient().DownloadString("https://api.ipify.org");
                 //ip = HttpContext.Connection.RemoteIpAddress?.ToString(); // to be consider EPV 
                 return Ok( new { ip = ip != "" ? ip : "localhost" });
            }
            var feature = HttpContext.Features.Get<IHttpConnectionFeature>();
            var localIpAddressValues = feature?.LocalIpAddress?.ToString();
            if (localIpAddressValues != null)
            {
                var scrapIp = localIpAddressValues.Split(":");
                if (scrapIp.Length != 3)
                {
                    ip = scrapIp[3];
                    return Ok(new {ip = ip != "1" ? ip : "localhost"});
                }
            }

            return Ok(new { ip =  "localhost" });
        }
    }
}
