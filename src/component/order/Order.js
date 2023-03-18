import React, { Component } from "react";
import { Link } from "react-router-dom";
import { leftArrow, search } from "../Constant";
import "./Order.scss";
import Orderhistory from "./Orderhistory";

export default class Order extends Component {
  constructor() {
    super();
    this.state = {
      selectedSpan: null,
      orderDropdown: true,
      hide: "none",
    };
  }

  // keep track of the currently selected span
  // const [selectedSpan, setSelectedSpan] = useState(null);

  // handle span click
  handleSpanClick = (index) => {
    this.setState({ selectedSpan: index });
  };
  orderDropdownfn = () => {
    if (this.state.orderDropdown) {
      this.setState({ orderDropdown: false });
      this.setState({ hide: "block" });
    } else {
      this.setState({ orderDropdown: true });
      this.setState({ hide: "none" });
    }
  };

  render() {
    return (
      <div className="order">
        <div>
          <span>Your account address</span>
          <span>{leftArrow}</span>
          <span>Your address</span>
        </div>
        <div>
          <h2>Your Orders</h2>
          <div className="inputdiv">
            <input type="text" placeholder="Search all orders" />
            <span>{search}</span>
            <Link>
              <button>Search Orders</button>
            </Link>
          </div>
        </div>
        <div className="orderNav">
          {["Orders", "Buy Again", "Not Yet Shipped", "Cancelled Orders"].map(
            (index) => (
              <span
                key={index}
                onClick={() => this.handleSpanClick(index)}
                style={{
                  color:
                    index === this.state.selectedSpan ? "black" : "#697475",
                  fontWeight: index === this.state.selectedSpan ? "600" : "500",
                  borderBottom:
                    index === this.state.selectedSpan
                      ? "1px solid black"
                      : "#697475",
                }}
              >
                {index}
              </span>
            )
          )}
        </div>
        <div className="orderPlaced">
          <h2>0 Orders placed in</h2>
          <div>
            <button onClick={this.orderDropdownfn}>Past 3 months</button>
            <div
              className="orderDropdown"
              style={{
                display: `${this.state.hide}`,
              }}
            >
              <div>last30 days</div>
              <div>past 3 months</div>
              <div>2023</div>
              <div>2022</div>
              <div>2021</div>
              <div>2020</div>
              <div>2019</div>
              <div>2018</div>
              <div>Archived Orders</div>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px", textAlign: "center" }}>
          Looks like you haven't placed an order in the last 3 months. View
          orders in 2023
        </div>
        <Orderhistory />
      </div>
    );
  }
}
// <span>Orders</span>
//           <span>Buy Again</span>
//           <span>Not Yet Shipped</span>
//           <span>Cancelled Orders</span>
