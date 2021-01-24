import React, { Component } from "react";
import logo from "./bootstrap-logo.svg";
import "./signin.css";
import axios from "axios";
import { toast } from "react-toastify";

export class Login extends Component {
  static displayName = Login.name;

  state = { account: { username: "", password: "" }, errors: {} };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { account } = this.state;
      const { data: response } = await this.login(
        account.username,
        account.password
      );

      localStorage.setItem("token", response.token);
      window.location = "/DriverPanel";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.message;
        this.setState({ errors });

        toast.error(this.state.errors.username);
      }
    }
  };

  async login(username, password) {
    const account = { username: username, password: password };
    return await axios.post("/auth/login", account);
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <main className="form-signin">
          <form onSubmit={this.handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              UserName
            </label>
            <input
              value={account.username}
              onChange={this.handleChange}
              type="email"
              id="inputEmail"
              className="form-control"
              name="username"
              placeholder="UserName"
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              value={account.password}
              onChange={this.handleChange}
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <br />

            <button className="w-100 btn btn-lg btn-info" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy;Ernesto Prado 2020</p>
          </form>
        </main>
      </div>
    );
  }
}
