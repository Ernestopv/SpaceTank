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



        [HttpPost("forward")]
        public IActionResult Get()
        {

            _logger.LogWarning("Forward");
            _motorService.Forward();
            return Ok();
        }


        [HttpPost("stop")]
        public IActionResult SetStop()
        {

            _logger.LogWarning("Stop");
            _motorService.Stop();
            return Ok();
        }



        [HttpPost("reverse")]
        public IActionResult SetReverse()
        {

            _logger.LogWarning("reverse");
            _motorService.Reverse();
            return Ok();
        }
    }
}
