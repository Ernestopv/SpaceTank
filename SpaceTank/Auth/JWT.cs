using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpaceTank.Auth
{
    public class JWT
    {
        public string Secret { get; set; }

        public int DurationInMin { get; set; }
    }
}
