import React, { Component } from "react";
import { data } from "../SlideData";
import Specialcart from "./Specialcart";
import Swiperslider from "./Swiperslider";
// import samsung23 from "asset/samsung23.png"

export default class Home extends Component {
  render() {
    return (
      <div className="max-w-[1800px] mx-auto">
        {/* top slider */}
        <Swiperslider data={data[0]} />

        {/* top slider 2 */}
        <div className="p-5">
          <Swiperslider data={data[1]} />
        </div>

        {/* Start where you left slider */}
        <div className="flex md:flex md:flex-row flex-col md:p-5 p-0">
          <div className="px-10 py-10 md:w-1/5 w-full">
            <h3 className="font-bold text-4xl text-black capitalize mb-[20px]">
              Start where you left
            </h3>
            <button className="w-36 h-10 bg-gradient-to-r from-[#888dcd] to-[#888dcd] text-white border-0 rounded-lg shadow-md cursor-pointer">
              view more
            </button>
          </div>
          <div className="w-4/5 flex items-center justify-center">
            <Swiperslider data={data[2]} />
          </div>
        </div>

        {/* Deals of the Day slider*/}
        <div className="flex md:flex md:flex-row flex-col md:p-5 p-0">
          <div className="px-10 py-10 md:w-1/5 w-full">
            <h3 className="font-bold text-4xl text-black capitalize mb-[20px]">
              Deals of the Day
            </h3>
            <button className="w-36 h-10 bg-gradient-to-r from-[#888dcd] to-[#888dcd] text-white border-0 rounded-lg shadow-md cursor-pointer">
              view more
            </button>
          </div>
          <div className="w-4/5">
            <Swiperslider data={data[3]} />
          </div>
        </div>

        {/* New Arrival */}
        <div className="bg-[#FDF2FF] p-10 ">
          <h1 className="pb-8 font-bold text-[2rem]">New Arrival</h1>
          <Swiperslider data={data[4]} />
        </div>

        {/* Our Products */}
        <div className="bg-gradient-to-b from-[#FDF2FF] to-transparent p-10 ">
          <h1 className="pb-8 font-bold text-[2rem]">Our Products</h1>
          <Specialcart data={data[5]} />
        </div>

        {/* Best deals */}
        <div className="bg-gradient-to-b from-[#FDF2FF] to-transparent p-10 ">
          <h1 className="pb-8 font-bold text-[2rem]">Best deals</h1>
          <Specialcart data={data[6]} />
        </div>

        {/* samsung bannner */}
        <img src={data[7].samsung23} alt="" />

        {/* Best deals */}
        <div className="bg-gradient-to-b from-[#FDF2FF] to-transparent p-10 ">
          <h1 className="font-bold text-[2rem]">
            Home décor picks from local shops
          </h1>
        </div>
        <div className="flex md:flex md:flex-row flex-col md:p-5 p-0">
          <div className="px-10 py-10 md:w-1/5 w-full">
            <h3 className="font-bold text-4xl text-black capitalize mb-[20px]">
              UPTO 60% OFF
            </h3>
            <button className="w-36 h-10 bg-gradient-to-r from-[#888dcd] to-[#888dcd] text-white border-0 rounded-lg shadow-md cursor-pointer">
              view more
            </button>
          </div>
          <div className="w-4/5 flex items-center justify-center">
            <Swiperslider data={data[2]} />
          </div>
        </div>

        {/* Best deals */}
        <div className="flex items-center justify-evenly flex-wrap">
          <div>
            <h2 className="text-3xl font-bold pb-5">{data[9].heading[0]}</h2>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold pb-5">{data[9].heading[1]}</h2>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold pb-5">{data[9].heading[2]}</h2>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-5">
              <img src={data[9].images[0]} alt="" />
              <div>
                <p>{data[9].p}</p>
                <h2 className="font-bold">{data[9].h}</h2>
                <div>
                  <div>
                    <del>{data[9].cutprice}</del>
                  </div>
                  <div className="font-bold text-2xl">{data[9].price}</div>
                </div>
                <button className="create-btn bg-gradient-to-b from-[#AC4DF3] to-[#D465F4] hover:to-[#AC4DF3] hover:from-[#D465F4] shadow-md rounded-lg h-10 font-bold text-base text-white border-none outline-none cursor-pointer w-full">
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Inspired by your browsing history */}
        <div className="bg-[#FDF2FF] p-10 ">
          <h1 className="pb-8 font-bold text-[2rem]">
            Inspired by your browsing history
          </h1>
          <Swiperslider data={data[4]} />
        </div>

        {/* Browsing history */}
        <div className="bg-[#FDF2FF] p-10 ">
          <h1 className="pb-8 font-bold text-[2rem]">Your browsing history</h1>
          <div className="flex gap-3 flex-wrap">
            <img src={data[2].images[0]} alt="" />
            <img src={data[2].images[1]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
