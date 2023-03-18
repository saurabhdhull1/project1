import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Home.css";

const images = ["asset/slider.png", "asset/slider.png", "asset/slider.png"];

class Topslider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
    };
  }

  prevSlide = () => {
    if (this.state.currentIndex === 0) {
      // Go to last image if currently on first image
      this.setState({
        currentIndex: images.length - 1,
        translateValue: -this.slideWidth() * (images.length - 1),
      });
    } else {
      // Move to previous image
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth(),
      }));
    }
  };

  nextSlide = () => {
    if (this.state.currentIndex === images.length - 1) {
      this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
      return;
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth(),
    }));
  };
  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.5s",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="arrowdiv1" onClick={this.prevSlide}><FaAngleLeft className="left-arrow" />{" "}</div>
        <div className="arrowdiv2" onClick={this.nextSlide}><FaAngleRight className="right-arrow" />{" "}</div>
        
      </div>
    );
  }
}

export default Topslider;
