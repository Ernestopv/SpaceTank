using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace TestProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UtilitiesController : ControllerBase
    {
        private readonly ILogger<UtilitiesController> _logger;
        public UtilitiesController(ILogger<UtilitiesController> logger)
        {
            _logger = logger;
        }

        [HttpGet("getIP")]
        public IActionResult GetIP()
        {
            var hostName = Dns.GetHostName();
            var ipAddress = Dns.GetHostAddresses(hostName);
            var IP = "";
            foreach (IPAddress ip in ipAddress)
            {
                IP = ip.ToString();
            }

            var result  = new {ip = IP != "" ? IP : "localhost"};
            return Ok(result);
        }
    }
}
