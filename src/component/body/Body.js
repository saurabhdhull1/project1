import React, { Component } from "react";
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
        <h1 style={{ height: "80vh", display: "grid", placeItems: "center" }}>
          Body
        </h1>
      </>
    );
  }
}
