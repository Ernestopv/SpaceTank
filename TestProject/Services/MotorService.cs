using System;
using System.Collections.Generic;
using System.Device.Pwm;
using System.Linq;
using System.Threading.Tasks;
using DCMotorDrivers;

namespace TestProject.Services
{
    public class MotorService
    {
        private readonly DCMotor _motor;
        public MotorService()
        {
             _motor = DCMotor.Create(GPIO.GPIO.ENA, GPIO.GPIO.IN1, GPIO.GPIO.IN2, null, false);
        }


        public void Forward()
        {
            _motor.Speed = 1;
        }

        public void Stop()
        {
            _motor.Speed = 0;
        }

        public void Back()
        {
            _motor.Speed = -1;
        }
    }


 
}
