import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Reactslick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.data.slides,
      slidesToScroll: 1,
      className: this.props.data.css,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: this.props.data.slidephone,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: this.props.data.slidetab,
          },
        },
      ],
      arrows: true,
      prevArrow: <button type="button" className="slick-prev"></button>,
      nextArrow: <button type="button" className="slick-next"></button>,
    };

    return (
      <Slider {...settings}>
        {this.props.data.images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Reactslick;
