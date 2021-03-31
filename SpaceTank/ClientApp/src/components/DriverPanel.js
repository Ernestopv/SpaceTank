import React, { Component } from "react";
import Joystick from "./joystick";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export class DriverPanel extends Component {
  static displayName = DriverPanel.name;

  constructor(props) {
    super(props);
    this.state = { ip: "" };
  }

  async componentDidMount() {
    await this.GetIP();
  }

  async GetIP() {
    const response = await axios.get("utilities/getip");
    const { data } = response;
    this.setState({ ip: data.ip });
  }

  setSourceIP() {
    return "http://" + this.state.ip + ":8090/?action=stream";
  }

  render() {
    return (
      <div width="100%" height="100%">
        <div>
          <center>
            <img src={this.setSourceIP()} width="100%" height="380" />
          </center>
          <div className="container jumbotron mt-3">
            <Joystick />
          </div>
        </div>
      </div>
    );
  }
}
