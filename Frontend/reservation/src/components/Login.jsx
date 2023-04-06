import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    authenticated: false,
    userRole: "",
  };

  login(usern, passw) {
    if (usern == "" || passw == "") {
      alert("Please fill required fields.");
    } else {
      axios
        .post("http://localhost:9000/api/register/authenticate/signIn", {
          username: usern,
          password: passw,
        })
        .then(
          (response) => {
            if (response.data.username === "not found") {
              console.log(this.state.authenticated);

              alert("Username or Password is incorrect.");
            } else {
              const token = response.data.token;
              const username = response.data.username;

              document.cookie = "token=" + token + "; HttpOnly";

              localStorage.setItem("token", token);
              localStorage.setItem("username", username);

              ////////////////////////////////////////////////////
              axios
                .get(
                  "http://localhost:9000/api/register/user/get/user/role/" +
                    this.state.username
                )
                .then((response) => {
                  this.setState({ userRole: response.data.role });
                  localStorage.setItem("role", response.data.role);
                });

              this.setState({ authenticated: true });
              //  console.log(this.state.authenticated);
              // console.log(response.data.username);
              //console.log(response.data.token);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  render() {
    // if (this.state.authenticated == false) {
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

    // } // else if (this.state.authenticated == true) {
    if (role == "tourist") {
      return (
        <Redirect
          to={{
            pathname: "/businesses",
            state: { username: this.state.username },
          }}
        />
      );
    } else if (role == "business") {
      return <Redirect to={"/profile/" + username} />;
    } else {
      return (
        <div className="loginContent">
          <div className="loginImg">
            <img src="logo.png" alt="" />
            <h3 className="appNameTitle">K O S A L B D I S C O V E R Y</h3>
          </div>
          <div className="loginForm">
            <div className="inputs">
              <input
                type="text"
                id="usernameInput"
                placeholder="username"
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />

              <input
                type="password"
                id="passwordInput"
                placeholder="password"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>
            <div className="buttons">
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.login(this.state.username, this.state.password);
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      );
    }
    //}
  }
}

export default Login;
