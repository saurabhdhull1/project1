import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../Constant";
// import "./Login.scss";

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
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 pt-2 sm:p-12 bg-white">
        <form action="">
          <div className="sm:w-96 w-full bg-purple-100 rounded-lg p-6 flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-purple-600 pb-4">Sign in</h2>
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
            <Link to="/otppassword">
              <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full" onClick={this.handleSubmit}>
                Get OTP
              </button>
            </Link>
            <Link to="/signin">
              <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">Login with Email</button>
            </Link>
            <p className="font-bold text-base leading-6 tracking-tight text-gray-500">
              By creating an account or logging in, you agree to Amazon's
              <span className="text-blue-500 cursor-pointer"> Conditions of Use</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
            </p>
            <span className="text-blue-500 cursor-pointer">Need help?</span>
          </div>
          <div className="flex items-center justify-center relative w-full sm:w-96">
            <div className="h-0 w-full border-t border-gray-500 my-8"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-1">New to Amazon?</div>
          </div>
          <div className="p-5 w-full sm:w-96">
            <Link to="/">
              <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">Create your Amazon account</button>
            </Link>
            <div className="border-t-2 border-[#697475] my-5"></div>
            <div className="flex flex-col items-center justify-center gap-15">
              <div className="flex items-center justify-eveny gap-10">
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Conditions of Use</span>
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Privacy Notice</span>
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Help</span>
              </div>
              <p className="font-bold text-base leading-6 tracking-tight text-gray-500">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
