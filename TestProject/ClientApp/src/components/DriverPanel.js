import React, { Component } from "react";
import Joystick from "./joystick";

export class DriverPanel extends Component {
  static displayName = DriverPanel.name;

  constructor(props) {
    super(props);
    this.state = { ip: "" };
  }

  componentDidMount() {
    this.GetIP();
  }

  async GetIP() {
    const response = await fetch("utilities/getip");
    const data = await response.json();
    this.setState({ ip: data.ip });
  }

  setSourceIP() {
    return "http://" + this.state.ip + ":8090/?action=stream";
  }

  render() {
    return (
      <div width="100%" height="400">
        <div>
          <center>
            <img src={this.setSourceIP()} width="100%" height="320" />
          </center>
          <div className="container jumbotron mt-3">
            <Joystick />
          </div>
        </div>
      </div>
    );
  }
}
