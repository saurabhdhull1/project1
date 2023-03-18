import React, { Component } from "react";
import Reactslick from "./Reactslick";
import "./Home.css";
import Topslider from "./Topslider";
import { data } from "../SlideData";

export default class Home extends Component {
  render() {
    return (
      <div className="home">

        <Reactslick data={data[0]} />
        <Reactslick data={data[1]} />
        <div className="fourslider">
          <div>
            <h3>Start where you left</h3>
            <button>view more</button>
          </div>
          <div>
            <Reactslick data={data[2]} />
          </div>
        </div>
        <div className="fourslider">
          <div>
            <h3>Deals of the Day</h3>
            <button>view more</button>
          </div>
          <div>
            <Reactslick data={data[3]} />
          </div>
        </div>
        <div className="newarival">
          <h1>New Arrival</h1>
          <Reactslick data={data[4]} />
        </div>
      </div>
    );
  }
}
