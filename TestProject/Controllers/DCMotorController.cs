using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestProject.Services;

namespace TestProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DCMotorController : ControllerBase
    {

        private readonly ILogger<DCMotorController> _logger;
        private readonly MotorService _motorService;
        public DCMotorController(ILogger<DCMotorController> logger, MotorService motorService)
        {
            _logger = logger;
            _motorService = motorService;
        }



        [HttpGet]
        public IActionResult Get()
        {

            _logger.LogWarning("ON");
            _motorService.Forward();
            return Ok();
        }


        [HttpGet("off")]
        public IActionResult GetOff()
        {

            _logger.LogWarning("Off");
            _motorService.Stop();
            return Ok();
        }



        [HttpGet("back")]
        public IActionResult GetBack()
        {

            _logger.LogWarning("Back");
            _motorService.Back();
            return Ok();
        }
    }
}
