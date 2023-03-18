import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Constant";
import "./Login.scss";


export default function Signin({signinData}) {
  const navigate = useNavigate();
  // console.log(signinData)
  return <Signinmini navigate={navigate} 
  signinData={signinData}
  ></Signinmini>
}


export class Signinmini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailpass: "",
      emailpassError: "",
    };
  }
  hangleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.signinData(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const emailpassError = this.validateemailpass();
    if (emailpassError) {
      this.setState({
        emailpassError,
      });
    } else {
      this.props.navigate("/password")
      this.setState({ emailpass: "", emailpassError: "" });
    }
  };
  validateemailpass = () => {
    const { emailpass } = this.state;
    if (!emailpass) {
      return "Email or phone number is required";
    }
    if (!/\S+@\S+\.\S+/.test(emailpass)) {
      return "Email is invalid";
    }
    // else if (!/^[0-9]{10}$/.test(emailpass)){
    //   return ("phone number is invalid")
    // }
    return "";
  };

  render() {
    const { emailpass, emailpassError } = this.state;
    return (
      <div className="signin">
        <button>Login here</button>
        <form action="">
          <div className="signin-container">
            <h2>Sign in</h2>
            <p>Email</p>
            <input
              type="text"
              name="emailpass"
              value={emailpass}
              onChange={this.hangleChange}
            />
            {emailpassError ? (
              <div className="alert">
                {Alert}
                {emailpassError}
              </div>
            ) : (
              <div></div>
            )}
            <Link to="/password">
              <button className="create-btn" onClick={this.handleSubmit}>
                Continue
              </button>
            </Link>
            <Link to="/otp">
              <button className="create-btn">
                Login with otp
              </button>
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
