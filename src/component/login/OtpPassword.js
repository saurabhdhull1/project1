import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function OtpPassword({data}) {
  const navigate = useNavigate();

  return <OtpPasswordmini navigate={navigate} data={data} ></OtpPasswordmini>
}


export class OtpPasswordmini extends Component {
  HandleOtp = (e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.navigate('/body')
  };
  validateEmail = () => {
    const { email } = this.state;
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    return "";
  };
  render() {
    return (
      <div className="signin">
        <button>Login here</button>
        <form action="">
          <div className="signin-container">
            <h2>Sign in</h2>
            <p>
              {this.props.data}{" "}
              <Link to="/otp" style={{ textDecoration: "none" }}>
                <span> Change</span>
              </Link>
            </p>
            <div className="password">
              <p>Enter your Otp</p>
              <span>Resend</span>
            </div>
            <input type="password" />
            <button className="create-btn" onClick={this.handleSubmit}>
              Continue
            </button>
            <div className="keepsignin">
              <label>
                <input type="checkbox" name="" id="" />
                <p>Keep me signed in.</p>
              </label>
            </div>
          </div>
          <br />
          <div className="signin-createAccount">
            <div className="signin-last">
              <div className="signin-last-in">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Help</span>
              </div>
              <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
