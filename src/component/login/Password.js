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
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 pt-2 sm:p-12 bg-white">
        <form action="">
          <div className="w-full sm:w-96 bg-purple-100 rounded-lg p-6 flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-purple-600 pb-4">Sign in</h2>
            <p className="font-bold text-gray-500">
              {this.props.data}{" "}
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <span className="text-blue-500 cursor-pointer font-bold text-sm"> Change</span>
              </Link>
            </p>
            <div className="flex justify-between gap-4">
              <p className="font-bold text-gray-500">Password</p>
              <span className="text-blue-500 cursor-pointer font-bold text-sm">Forgot Password</span>
            </div>
            <input type="password" className="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-purple-600 focus:border-transparent"/>
            <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full" onClick={this.handleSubmit}>
              Continue
            </button>
            <div>
              <label className="flex justify-start gap-2">
                <input type="checkbox" className="cursor-pointer"/>
                <p className="font-bold text-gray-500 cursor-pointer">Keep me signed in.</p>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center relative w-96">
            <div className="h-0 w-full border-t border-gray-500 my-8"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-1">OR</div>
          </div>
          <div className="p-5 w-full sm:w-96">
            <Link to="/otp">
              <button
                className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full"
                // onClick={this.HandleOtp}
              >
                Get OTP on your phone
              </button>
            </Link>
            <p className="font-bold text-gray-500 flex items-center justify-start gap-2 p-4">{Alert}Message and Data rates may apply.</p>
            <div className="border-t-2 border-[#697475] my-5"></div>
            <div className="flex flex-col items-center justify-center gap-15">
              <div className="flex items-center justify-eveny gap-10">
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Conditions of Use</span>
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Privacy Notice</span>
                <span className="text-blue-500 cursor-pointer font-bold text-sm">Help</span>
              </div>
              <p className="font-bold text-base leading-6 tracking-tight text-gray-500 pt-2">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
