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
import Headercss from "./Header.module.css";
import Header2 from "./Header2";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className={Headercss.headerContainer}>
          <div className={Headercss.header}>
            <Link to="/signin">
              <button>Login here</button>
            </Link>
            <div className={Headercss.location}>
              {location}
              <div>
                <h6>Deliver to Rupin</h6>
                <span>LUDHIAN A 141010</span>
              </div>
            </div>
            <div className={Headercss.inputdiv}>
              <input type="text" placeholder="Search products" />
              <span>{search}</span>
            </div>
            <div>
              <span>{filtercircle}</span>
            </div>
            <div>
              <img src="/indiaflag.svg" alt="flag" />
              <span className="flex items-center">
                En <span>{downarrow}</span>
              </span>
            </div>
            <div className={Headercss.accountMain}>
              <div className={Headercss.account}>
                <h6>Hello Rupin,</h6>
                <span className="flex items-center"> 
                  Accounts & Links <span>{downarrow}</span>
                </span>
              </div>
              <div className={Headercss.account}>
                <h6>Returns</h6>
                <span>& Orders</span>
              </div>
            </div>
            <div className={Headercss.cartMain}>
              <div>{heart}</div>
              <div className="cart flex items-center gap-2">
                <span>{cart}</span>
                <span className="flex items-center gap-2">
                  Cart <span>{downarrow}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*mob-header-top*/}

        <div className={Headercss.mobHeaderTop}>
          <div className={Headercss.inputdiv}>
            <div>
              <input type="text" placeholder="Search products" />
              <span>{search}</span>
            </div>
          </div>
        </div>

        {/*Header 2*/}

        <div className="Headercss.header2-container">
          <Header2 />
        </div>

        {/*mob-header-bottom*/}
        <div className={Headercss.mobHeaderBottom}>
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
