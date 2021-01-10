import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { DriverPanel } from "./components/DriverPanel";
import { Login } from "./components/Login";
import { settings } from "./components/settings";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Login} />
        <Route path="/DriverPanel" component={DriverPanel} />
        <Route path="/settings" component={settings} />
      </Layout>
    );
  }
}
