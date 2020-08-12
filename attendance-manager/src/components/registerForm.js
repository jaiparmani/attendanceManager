import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class RegisterForm extends Component {
  render() {
    return (
      <div>
        <h5>Register</h5>
        <form>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
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
            onClick={this.props.handleRegister}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
