import React, { Component } from "react";

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <h5>Login</h5>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.props.handleLogin()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
