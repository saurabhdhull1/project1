import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { GiRecycle } from "react-icons/gi";
import {
  filtercircle,
  location,
  heart,
  cart,
  search,
  downarrow,
} from "../Constant";
import "./Header.scss";
import Header2 from "./Header2";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header-container">
          <div className="header">
            <Link to="/signin">
              <button>Login here</button>
            </Link>
            <div className="location">
              {location}
              <div>
                <h6>Deliver to Rupin</h6>
                <span>LUDHIAN A 141010</span>
              </div>
            </div>
            <div className="inputdiv">
              <input type="text" placeholder="Search products" />
              <span>{search}</span>
            </div>
            <div>
              <span>{filtercircle}</span>
            </div>
            <div>
              <img src="/indiaflag.svg" alt="flag" />
              <span>
                En <span>{downarrow}</span>
              </span>
            </div>
            <div className="accountMain">
              <div className="account">
                <h6>Hello Rupin,</h6>
                <span>
                  Accounts & Links <span>{downarrow}</span>
                </span>
              </div>
              <div className="account">
                <h6>Returns</h6>
                <span>& Orders</span>
              </div>
            </div>
            <div className="cartMain">
              <div>{heart}</div>
              <div className="cart">
                <span>{cart}</span>
                <span>
                  Cart <span>{downarrow}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*mob-header-top*/}

        <div className="mob-header-top">
          <div className="inputdiv">
            <div>
              <input type="text" placeholder="Search products" />
              <span>{search}</span>
            </div>
          </div>
        </div>

        {/*Header 2*/}

        <div className="header2-container">
          <Header2 />
        </div>

        {/*mob-header-bottom*/}
        <div className="mob-header-bottom">
          <div>
            <BiHomeAlt2 />
          </div>
          <div>
            <VscAccount />
          </div>
          <div>
            <GiRecycle />
          </div>
          <div>{cart}</div>
          <div>
            <BsList />
          </div>
        </div>
      </>
    );
  }
}
