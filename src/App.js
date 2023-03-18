import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./component/login/CreateAccount";
import Sighin from "./component/login/Signin";
import Password from "./component/login/Password";
import Otp from "./component/login/Otp";
import Body from "./component/body/Body";
import OtpPassword from "./component/login/OtpPassword";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }
  // data from signin (email or phone)
  signinData = (data) => {
    this.setState({ data: data });
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route
            path="/signin"
            element={<Sighin signinData={this.signinData} />}
          />
          <Route
            path="/Password"
            element={<Password data={this.state.data} />}
          />
          <Route path="/otp" element={<Otp signinData={this.signinData} />} />
          <Route
            path="/otppassword"
            element={<OtpPassword data={this.state.data} />}
          />
          <Route path="/body" element={<Body />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
// <Body />
