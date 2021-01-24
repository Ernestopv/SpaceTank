import React, { Component } from "react";
import JoyStick from "react-joystick";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

JoyStick.defaultProps = {
  options: {
    mode: "semi",
    catchDistance: 150,
    color: "gray",
    size: 180,
  },
  containerStyle: {
    width: "50%",
    height: "30vh",
    position: "relative",
    background: "linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)",
  },
};

const joyOptions = {
  mode: "semi",
  catchDistance: 150,
  color: "white",
  size: 50,
};

const containerStyle = {
  position: "relative",
  height: "30vh",
  width: "100%",
  background: "linear-gradient(to right, #77A1D3, #79CBCA, #77A1D3)",
};

class Control extends Component {
  constructor() {
    super();
    this.managerListener = this.managerListener.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  async managerListener(manager) {
    manager.on("move", (e, stick) => {
      const identifier = stick.identifier;
      const values = stick.direction;

      if (identifier > 0) {
        if (values !== undefined) {
          const { x, y, angle } = values;
          console.log("x :" + x + " y: " + y + " angle: " + angle);
          this.handleDirection(y, x, angle);
        }
      }
    });
    manager.on("end", () => {
      this.handleStop();
      console.log("stop");
    });
  }

  async handleStop() {
    await axios.post("/DCMotor/stop", null);
  }

  async handleDirection(y, x, angle) {
    const direction = { Y: y, X: x, Angle: angle };
    await axios.post("/DCMotor/direction", direction);
  }

  render() {
    return (
      <div>
        <JoyStick
          joyOptions={joyOptions}
          containerStyle={containerStyle}
          managerListener={this.managerListener}
        />
      </div>
    );
  }
}

export default Control;
