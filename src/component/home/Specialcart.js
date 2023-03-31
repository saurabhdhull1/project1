import React, { Component } from "react";
// import { data } from "../SlideData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { cart, cartbtn } from "../Constant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
// import shoes from "asset/shoes.png"

export default class Specialcart extends Component {
  render() {
    // const bgurl = {
    //   backgroundImage: `url(${data[5].images[0]})`,
    //   backgroundSize: 'contain',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    // };
    const {
      images,
      shoesname,
      ourproducts,
      bestdeal,
      img,
      h,
      cutprice,
      price,
    } = this.props.data;
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
            spaceBetween: 20,
          },
        }}
      >
        {bestdeal &&
          images.map((image, index) => (
            <div key={index}>
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                  <img
                    src="asset/save10.png"
                    alt=""
                    className="absolute top-5 right-5 w-[60px] h-[60px]"
                  />
                  <span className="absolute top-5 left-5 text-4xl font-bold">
                    <div className="text-[#ec4545]">Special </div>offer
                  </span>
                  <div className="absolute bottom-3 left-0 p-4 bg-[#FFFFFFA8] mx-auto w-full rounded-[30px]">
                    <p className="font-bold text-xl">{shoesname}</p>
                    <div className="font-bold text-2xl">
                      <span className="text-[#C82020]">Rs.66,000 </span>
                      <del>Rs.65,208</del>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}

        {ourproducts && (
          <div>
            <SwiperSlide>
              <div className="relative overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
                <img
                  src="asset/save10.png"
                  alt=""
                  className="absolute top-5 right-5 w-[60px] h-[60px]"
                />
                <span className="absolute top-5 left-5 text-4xl font-bold">
                  <div className="text-[#ec4545]">Special </div>offer
                </span>
                <div className="absolute bottom-3 left-0 p-4 bg-[#FFFFFFA8] mx-auto w-full rounded-[30px]">
                  <p className="font-bold text-xl">{shoesname}</p>
                  <div className="font-bold text-2xl">
                    <span className="text-[#C82020]">Rs.66,000 </span>
                    <del>Rs.65,208</del>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden flex gap-8">
                  <div>
                    <div>
                      <img src={image.img1} alt="" />
                      <h3 className="font-bold">{h}</h3>
                      <span className="mr-1">
                        <del>{cutprice}</del>
                      </span>
                      <span className="font-bold">{price}</span>
                    </div>
                    <div>
                      <img src={image.img2} alt="" />
                      <h3 className="font-bold">{h}</h3>
                      <span className="mr-1">
                        <del>{cutprice}</del>
                      </span>
                      <span className="font-bold">{price}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={image.img3} alt="" />
                      <h3 className="font-bold">{h}</h3>
                      <span className="mr-1">
                        <del>{cutprice}</del>
                      </span>
                      <span className="font-bold">{price}</span>
                    </div>
                    <div>
                      <img src={image.img4} alt="" />
                      <h3 className="font-bold">{h}</h3>
                      <span className="mr-1">
                        <del>{cutprice}</del>
                      </span>
                      <span className="font-bold">{price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    );
  }
}
// bg-[#FFFFFFA8]
