import React, { Component } from "react";
import "./Header.scss";
import { BsList } from "react-icons/bs";
import { downarrow } from "../Constant";
// import { Link } from "react-router-dom";

export default class Header2 extends Component {
  constructor() {
    super();
    this.state = {
      On: true,
    };
  }

  render() {
    const togglebtn = () => {
      const heading2 = document.querySelector(".header2");
      if (this.state.On) {
        // heading2.style.display = "flex";
        heading2.style.right = "0";
        this.setState({ On: false });
      } else {
        // heading2.style.display = "none";
        heading2.style.right = "-110%";
        this.setState({ On: true });
      }
    };
    return (
      <>
        <div className="header2Mob">
          <div>
            <h2>Amazon</h2>
          </div>
          <div className="menu-icon" onClick={togglebtn}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header2">
          <div onClick={togglebtn}>
            <span>
              <BsList />
            </span>
            All
          </div>
          <div onClick={togglebtn}>Sell</div>
          <div onClick={togglebtn}>Fresh</div>
          <div onClick={togglebtn}>Gift Cards</div>
          <div onClick={togglebtn}>Buy Again</div>
          <div onClick={togglebtn}>App Pay</div>
          <div onClick={togglebtn}>Baby</div>
          <div onClick={togglebtn}>
            Browsing History <span>{downarrow}</span>
          </div>
          <div onClick={togglebtn}>Special Items</div>
          <div onClick={togglebtn}>Rupin's Amazon.in</div>
          <div className="downloadDiv">
            <button>Download</button>
            <div>
              <span>Shopping made it easy</span>
              <div>Download the app</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}




