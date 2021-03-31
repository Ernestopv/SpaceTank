import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import { Layout } from "./components/Layout";
import { DriverPanel } from "./components/DriverPanel";
import { Login } from "./components/Login";
import LogOut from "./components/logout";
import { Settings } from "./components/settings";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);

    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt).name;
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Layout>
          <Route exact path="/" component={Login} />
          <Route path="/DriverPanel">
            {!this.state.user ? (
              <Redirect to="/DriverPanel" />
            ) : (
              <DriverPanel />
            )}
          </Route>
          <Route path="/settings">
            {!this.state.user ? <Redirect to="/settings" /> : <Settings />}
          </Route>
          <Route path="/logout">
            {!this.state.user ? <Redirect to="/logout" /> : <LogOut />}
          </Route>
        </Layout>
      </React.Fragment>
    );
  }
}
