// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cart, cartbtn } from "../Constant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import React, { Component } from "react";

export default class Swiperslider extends Component {
  render() {
    const { topslider,images, p, h, cutprice, price } = this.props.data;
    return (
      <Swiper
        // className="this.props.data.css"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // loop
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        navigation
        slidesPerView={this.props.data.slidephone}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: this.props.data.slidetab,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: this.props.data.slides,
            spaceBetween:20,
          },
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <SwiperSlide key={index}>
              <div className={ topslider ? "bg-transparent" : "p-3 bg-[#FFFFFF] rounded-[9px]"} >
                <img src={image} alt={"sliderImage"} className="w-full" />

                {/* this is like only show this when price is  there */}
                {price && (
                  <div className="p-2">
                    <p>{p}</p>
                    <h3 className="font-semibold">{h}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <del>{cutprice}</del>
                        <h2 className="font-bold text-[1.5rem]">{price}</h2>
                      </div>
                      {price && (
                        <div className="relative cursor-pointer">
                          <span>{cartbtn}</span>{" "}
                          <span className="absolute top-3 left-3">{cart}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    );
  }
}
