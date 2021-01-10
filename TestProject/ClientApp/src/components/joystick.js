import React, { Component } from "react";
import JoyStick from "react-joystick";

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
  }

  managerListener(manager) {
    manager.on("move", (e, stick) => {
      const identifier = stick.identifier;

      const values = stick.direction;

      if (identifier > 0) {
        if (values !== undefined) {
          const { x, y, angle } = values;
          console.log("x :" + x + " y: " + y + " angle: " + angle);
        }
      }
    });

    manager.on("end", () => {
      console.log("stop");
    });
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
