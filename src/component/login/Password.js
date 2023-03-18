import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Alert } from "../Constant";


export default function Password({data}) {
  const navigate = useNavigate();

  return <Passwordmini navigate={navigate} data={data} ></Passwordmini>
}

export  class Passwordmini extends Component {
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
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <span> Change</span>
              </Link>
            </p>
            <div className="password">
              <p>Password</p>
              <span>Forgot Password</span>
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
          <div className="newToAmazon">
            <div className="line"></div>
            <div>or</div>
          </div>
          <div className="signin-createAccount">
            <Link to="/otp">
              <button
                className="create-btn"
                // onClick={this.HandleOtp}
              >
                Get OTP on your phone
              </button>
            </Link>
            <p>{Alert}Message and Data rates may apply.</p>
            <div className="line"></div>
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
