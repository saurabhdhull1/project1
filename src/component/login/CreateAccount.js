import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Constant";
// import "./Login.scss";

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
      return "Confirm your Password";
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-2 sm:p-12 bg-white">
        <Link to="/signin">
          <button className="bg-[#AC4DF3] rounded-[27px] px-10 py-4 text-white">Login here</button>
        </Link>
        <form action="">
          <div className="sm:w-96 bg-purple-100 rounded-lg p-6 flex flex-col gap-4 w-full">
            <h2 className="text-3xl font-medium text-purple-600 pb-4">Create account</h2>
            <div>
              <p className="font-bold text-gray-500">Your name</p>
              <input
                type="text"
                // placeholder="First and last name"
                name="name"
                value={name}
                onChange={this.hangleChange}
                className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"
              />
              {nameError ? (
                <div className="gap-2 text-red-700 px-3 py-1 rounded-md flex items-center justify-start">
                  {Alert}
                  {nameError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p className="font-bold text-gray-500">Email</p>
              <input
                type="text"
                // placeholder="Your email"
                name="email"
                value={email}
                onChange={this.hangleChange}
                className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"
              />
              {emailError ? (
                <div className="gap-2 text-red-700 px-3 py-1 rounded-md flex items-center justify-start">
                  {Alert}
                  {emailError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p className="font-bold text-gray-500">Phone number</p>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.hangleChange}
                className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"
              />
              {phoneError ? (
                <div className="gap-2 text-red-700 px-3 py-1 rounded-md flex items-center justify-start">
                  {Alert}
                  {phoneError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p className="font-bold text-gray-500">Password</p>
              <input
                type="password"
                // placeholder="Password"
                name="password"
                value={password}
                onChange={this.hangleChange}
                className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"
              />
              {passwordError ? (
                <div className="gap-2 text-red-700 px-3 py-1 rounded-md flex items-center justify-start">
                  {Alert}
                  {passwordError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <p className="font-bold text-gray-500">Password again</p>
              <input
                type="password"
                // placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.hangleChange}
                className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"
              />
              {confirmPasswordError ? (
                <div className="gap-2 text-red-700 px-3 py-1 rounded-md flex items-center justify-start">
                  {Alert}
                  {confirmPasswordError}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <button onClick={this.handleSubmit} className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
              Create your Amazon account
            </button>
            <p className="font-bold text-base leading-6 tracking-tight text-gray-500">
              By creating an account or logging in, you agree to Amazon's
              <span className="text-blue-500 cursor-pointer"> Conditions of Use</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
            </p>
            <div className="border-t-2 border-[#697475] my-3"></div>
            <p className="font-bold text-base leading-6 tracking-tight text-gray-500">
              Already have an account?{" "}
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <span className="text-blue-500 cursor-pointer">Sign in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
