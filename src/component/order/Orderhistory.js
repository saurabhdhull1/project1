import React, { Component } from "react";
import "./Order.scss";
import { downarrow } from "../Constant";

export default class Orderhistory extends Component {
  render() {
    return (
      <div className="orderhistory">
        <div>
          <h2>Orderhistory</h2>
          <p>Deselect all items</p>
        </div>
        <div>
          <div className="orderhistoryCheck">
            <input type="checkbox" name="" />
          </div>
          <div className="productdetails">
            <div>
              <img src="productimg.png" alt="" />
            </div>
            <div>
              <p>
                ASUS ROG Zephyrus Duo 16 Dual Screen Laptop, 16" (40.64 cm)
                UHD+/FHD+ 120Hz/240Hz/3ms, AMD Ryzen 9 6900HX, 16GB RTX 3080 Ti,
                Gaming Laptop (32GB/2TB SSD/Win 11/Office/Black/2.55 Kg),
                GX650RXZ-LB226WS
              </p>
              <p>In Stock</p>
              <p>Eligible for Free Shipping</p>
              <label>
                {" "}
                <input type="checkbox" /> This will be a gift{" "}
              </label>
              <p>
                <span>Pattern name:</span> Laptop
              </p>
              <div className="qtydiv">
                <span>Qty:1 {downarrow}</span>
                <span>Delete</span>
                <span>Save for later</span>
                <span>See more like this</span>
                <span>Share</span>
              </div>
            </div>
          </div>
          <h2>RS 56.000</h2>
        </div>
        <div className="orderhistoryBottom">
          Subtotal (1 item): <h4>RS 56.000</h4>
        </div>
      </div>
    );
  }
}
