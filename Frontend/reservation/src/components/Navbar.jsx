import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
    };
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
  render() {
    // const list = this.state.elements.map((element, i) => (
    //  <li key={i}>{element}</li>
    //  ));
    return (
      <div>
        <div className="navbar navbar-light bg-light">
          <div>
            <h3>KOSALB DISCOVERY</h3>
          </div>

          <div className="navbarRightElements">
            <li>Home</li>
            <Link
              to={"/profile/" + this.state.username}
              className="navBarProfileBtn"
            >
              <li>Profile</li>
            </Link>

            <li>Reservations</li>

            <Link
              to={"/"}
              params={{ authenticated: false }}
              onClick={this.logout}
              className="navBarProfileBtn"
            >
              <li>Log out</li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
