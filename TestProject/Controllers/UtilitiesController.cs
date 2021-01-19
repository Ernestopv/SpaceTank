using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Options;
using TestProject.Configuration;

namespace TestProject.Controllers
{
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
            var scrapIp = localIpAddressValues.Split(":"); 
            ip = scrapIp[3];
            return Ok(new { ip = ip != "" ? ip : "localhost" });
        }
    }
}
