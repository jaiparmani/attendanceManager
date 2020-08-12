import React, { Component } from "react";
import LoginForm from "./loginForm.js";
import RegisterForm from "./registerForm.js";

export class Login extends Component {
  state = { allow: true };
  toggleAllow = () => {
    const allow = this.state.allow;
    this.setState({ allow: !allow });
  };
  toggleAllowText = () => {
    return this.state.allow === true ? "New User?" : "Have an account already?";
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <button
            onClick={this.toggleAllow}
            className="btn btn-primary"
            style={{ float: "right" }}
          >
            {this.toggleAllowText()}
          </button>
          {this.state.allow === true && (
            <LoginForm handleLogin={this.props.handleLogin}></LoginForm>
          )}
          {this.state.allow === false && (
            <RegisterForm
              handleRegister={this.props.handleRegister}
            ></RegisterForm>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
