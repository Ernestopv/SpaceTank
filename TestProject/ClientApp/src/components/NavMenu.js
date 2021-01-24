import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import jwtDecode from "jwt-decode";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      user: "",
      collapsed: true,
    };
  }

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt).name;
      this.setState({ user });
    } catch (ex) {}
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const style = {
      color: "#3b8fe3",
      fontSize: 26,
    };
    return (
      <header>
        <Navbar
          user={this.state.user}
          className=" navbar-inverse navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container className="container-fluid">
            {this.state.user && (
              <React.Fragment>
                <div class="navbar-header">
                  <NavbarBrand style={style} tag={Link} to="/DriverPanel">
                    <i className="bi bi-broadcast"></i> SpaceTank
                  </NavbarBrand>
                </div>
              </React.Fragment>
            )}
            {!this.state.user && (
              <React.Fragment>
                <div class="navbar-header">
                  <NavbarBrand style={style}>
                    <i className="bi bi-broadcast"></i> SpaceTank
                  </NavbarBrand>
                </div>
              </React.Fragment>
            )}

            {this.state.user && (
              <React.Fragment>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse
                  className="d-sm-inline-flex flex-sm-row-reverse"
                  isOpen={!this.state.collapsed}
                  navbar
                >
                  <ul className="nav navbar-nav navbar-left">
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to="/DriverPanel"
                      >
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          {" "}
                          <i className="bi bi-joystick"></i> Driver Panel
                        </button>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/settings">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          {" "}
                          <i className="bi bi-gear-fill"></i> Settings
                        </button>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/logout">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          <i className="bi bi-box-arrow-right"></i> Login Out
                        </button>
                      </NavLink>
                    </NavItem>
                  </ul>
                </Collapse>
              </React.Fragment>
            )}
          </Container>
        </Navbar>
      </header>
    );
  }
}
