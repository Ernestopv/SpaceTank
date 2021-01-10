using DCMotorDrivers;
using TestProject.Configuration;

namespace TestProject.Services
{
    public class MotorService
    {
        private readonly DCMotor _motor1;
        private readonly DCMotor _motor2;
        public MotorService()
        {
             _motor1 = DCMotor.Create(GPIO.ENA, GPIO.IN1, GPIO.IN2, null, false);
             _motor2 = DCMotor.Create(GPIO.ENB, GPIO.IN3, GPIO.IN4, null, false);
        }


        public void Forward()
        {
            _motor1.Speed = 1;
            _motor2.Speed = 1;
        }

        public void Stop()
        {
            _motor1.Speed = 0;
            _motor2.Speed = 0;
        }

        public void Reverse()
        {
            _motor1.Speed = -1;
            _motor2.Speed = -1;
        }
    }


 
}
