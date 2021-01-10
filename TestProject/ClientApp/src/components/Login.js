import React, { Component } from "react";
import logo from "./bootstrap-logo.svg";
import "./signin.css";

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <div class="text-center">
        <main className="form-signin">
          <form>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <label for="inputEmail" className="visually-hidden">
              UserName
            </label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="UserName"
              required
              autofocus
            />
            <label for="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <br />
            <br />

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy;Ernesto Prado 2020</p>
          </form>
        </main>
      </div>
    );
  }
}
