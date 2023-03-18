import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Constant";
import "./Login.scss";

export default function CreateAccount() {
  const navigate = useNavigate();

  return <CreateAccountmini navigate={navigate}></CreateAccountmini>;
}
export class CreateAccountmini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      nameError: "",
      emailError: "",
      phoneError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  }

  hangleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    if (this.validateName() !== this.setState({ [name]: value })) {
      this.setState({
        nameError: "",
        emailError: "",
        phoneError: "",
        passwordError: "",
        confirmPasswordError: "",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const nameError = this.validateName();
    const emailError = this.validateEmail();
    const phoneError = this.validateMobileNumber();
    const passwordError = this.validatePassword();
    const confirmPasswordError = this.validateConfirmPassword();

    if (
      nameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      phoneError
    ) {
      this.setState({
        nameError,
        phoneError,
        emailError,
        passwordError,
        confirmPasswordError,
      });
    } else {
      this.props.navigate("/body");
      // clearing form
      this.setState({
        name: "",
        email: "",
        phone: "",
        phoneError: "",
        password: "",
        confirmPassword: "",
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
      });
    }
  };

  validateName = () => {
    const { name } = this.state;
    if (!name) {
      return "Name is required";
    }
    if (name.length < 3) {
      return "Name must have atleast 3 letters";
    }
    return "";
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

  validatePassword = () => {
    const { password } = this.state;
    if (!password) {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  validateConfirmPassword = () => {
    const { password, confirmPassword } = this.state;
    if (!confirmPassword) {
      return "Confirm Password is required";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  render() {
    const {
      name,
      email,
      phone,
      phoneError,
      password,
      confirmPassword,
      nameError,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;
    return (
      <div className="CreateAccount">
        <Link to="/signin">
          <button>Login here</button>
        </Link>
        <form action="">
          <div className="CreateAccount-container">
            <h2>Create account</h2>
            <div>
              <p>Your name</p>
              <input
                type="text"
                // placeholder="First and last name"
                name="name"
                value={name}
                onChange={this.hangleChange}
              />
              {nameError ? (
                <div className="alert">
                  {Alert}
                  {nameError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p>Email</p>
              <input
                type="text"
                // placeholder="Your email"
                name="email"
                value={email}
                onChange={this.hangleChange}
              />
              {emailError ? (
                <div className="alert">
                  {Alert}
                  {emailError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
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
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                // placeholder="Password"
                name="password"
                value={password}
                onChange={this.hangleChange}
              />
              {passwordError ? (
                <div className="alert">
                  {Alert}
                  {passwordError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p>Password again</p>
              <input
                type="password"
                // placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.hangleChange}
              />
              {confirmPasswordError ? (
                <div className="alert">
                  {Alert}
                  {confirmPasswordError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <button onClick={this.handleSubmit} className="create-btn">
              Create your Amazon account
            </button>
            <p className="privacyText">
              By creating an account or logging in, you agree to Amazon's
              <span> Conditions of Use</span> and <span>Privacy Policy</span>.
            </p>
            <div className="line"></div>
            <p className="alreadyAccount">
              Already have an account?{" "}
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <span>Sign in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
