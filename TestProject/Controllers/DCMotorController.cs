using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestProject.Configuration;
using TestProject.Services;

namespace TestProject.Controllers
{
  
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class DCMotorController : ControllerBase
    {

        private readonly ILogger<DCMotorController> _logger;
        private readonly MotorService _motorService;
        public DCMotorController(ILogger<DCMotorController> logger,MotorService motorService)
        {
            _logger = logger;
            _motorService = motorService;
        }



        [HttpPost("direction")]
        public IActionResult SetDirection([FromBody] DirectionModel direction)
        {
            switch (direction.Angle)
            {
                case "up" when direction.Angle == "up":
                    _logger.LogWarning("Forward");

                   _motorService.Forward();
                    return Ok(new{response ="forward"});
                case "down" when direction.Angle == "down":
                    _logger.LogWarning("reverse");

                    _motorService.Reverse();
                    return Ok(new {reponse="Reverse"});

                case "right" when direction.Angle == "right":
                    _logger.LogWarning("right");

                    _motorService.Right();
                    return Ok(new {response="Right"});
                case "left" when direction.Angle == "left":
                    _logger.LogWarning("left");

                   _motorService.Left();
                    return Ok(new {response="Left"});
                default:
                    return Ok(new {response=direction});
            }
        }


        [HttpPost("stop")]
        public IActionResult SetStop()
        {

            _logger.LogWarning("Stop");
            _motorService.Stop();
            return Ok(new {response="stop"});
        }

    }
}
