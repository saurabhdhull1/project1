import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Constant";
import "./Login.scss";

export default function Otp({ signinData }) {
  const navigate = useNavigate();

  return <Otpmini navigate={navigate} signinData={signinData}></Otpmini>;
}

export class Otpmini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      phoneError: "",
    };
  }
  hangleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.signinData(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const phoneError = this.validateMobileNumber();
    if (phoneError) {
      this.setState({
        phoneError,
      });
    } else {
      this.setState({ phone: "", phoneError: "" });
      this.props.navigate("/otppassword");
    }
  };

  validateMobileNumber = () => {
    const { phone } = this.state;
    if (!phone) {
      return "Mobile number is required";
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      return "Mobile number is invalid";
    }
    return "";
  };

  render() {
    const { phone, phoneError } = this.state;
    return (
      <div className="signin">
        <button>Login here</button>
        <form action="">
          <div className="signin-container">
            <h2>Sign in</h2>
            <p>Phone number</p>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.hangleChange}
            />
            {phoneError ? (
              <div className="alert">
                {Alert}
                {phoneError}
              </div>
            ) : (
              <div></div>
            )}
            <Link to="/otppassword">
              <button className="create-btn" onClick={this.handleSubmit}>
                Get OTP
              </button>
            </Link>
            <Link to="/signin">
              <button className="create-btn">Login with Email</button>
            </Link>
            <p className="privacyText">
              By creating an account or logging in, you agree to Amazon's
              <span> Conditions of Use</span> and <span>Privacy Policy</span>.
            </p>
            <span>Need help?</span>
          </div>
          <div className="newToAmazon">
            <div className="line"></div>
            <div>New to Amazon?</div>
          </div>
          <div className="signin-createAccount">
            <Link to="/">
              <button className="create-btn">Create your Amazon account</button>
            </Link>
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
