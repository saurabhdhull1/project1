import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="mb-[50px] sm:mb-0">
        <div className="grid place-items-center bg-[#C46BD7] text-white font-bold text-2xl cursor-pointer py-4">
          Back to top
        </div>
        <div className="flex sm:items-start sm:justify-center flex-col sm:flex-row flex-wrap sm:gap-20 gap-5 py-5 px-4">
          <div>
            <button
              className="create-btn bg-black shadow-md rounded-[30px] h-10 font-bold text-base text-white border-none outline-none cursor-pointer mb-4 w-full"
              onClick={this.handleSubmit}
            >
              login
            </button>
            <h2 className="font-bold text-2xl mb-4">Connect with Us</h2>
            <p>
              Got questions? <br /> Call us 24/7!
            </p>
            <p>
              03 111 666 144 <br />
              0317 1777015.
            </p>
            <p>
              Contact info <br /> info@winstore.pk
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-4">Get to know us</h2>
            <p>
              About Us <br />
              Contact Us <br />
              FAQs <br />
              Shipping & Return <br />
              Privacy policy <br />
              Terms & Conditions <br />
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-4">Trending</h2>
            <p>
              Installments <br />
              Electronics <br />
              Grocery <br />
              Health &Beauty <br />
              Home Appliances <br />
              Mobile Accessories <br />
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-4">Customer Care</h2>
            <p>
              My Account <br />
              Track Your Order <br />
              Recently Viewed <br />
              Wishlist <br />
              Compare <br />
              Become a Vendor <br />
            </p>
          </div>
        </div>
        <div className="grid place-items-center bg-[#C46BD7] text-white cursor-pointer py-4">
          
            <div className="flex gap-5 text-[10px] sm:text-[15px]">
              <span>Conditions of Use & Sale</span>
              <span>Privacy Notice</span>
              <span>Interest-Based Ads</span>
            </div>
            <div className="text-[10px] sm:text-[15px]">© 1996-2023, Amazon.com, Inc. or its affiliates</div>
         
        </div>
      </div>
    );
  }
}
