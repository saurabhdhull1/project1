import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Home from "../home/Home";
// import Order from "../order/Order";
// <Order />

export default class Body extends Component {
  render() {
    return (
      <>
        <Header />
        <Home/>
        <Footer/>
      </>
    );
  }
}
