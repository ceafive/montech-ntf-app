import React from "react";
import NextImage from "next/image";

import newsletter_1 from "../assets/images/newsletter_1.png";

const Newsletter = () => {
  return (
    <div className="mt-[100px] lg:mt-[212px] flex justify-center w-full">
      <div
        className="flex lg:flex-row flex-col justify-center items-center rounded-[35px] w-11/12 lg:w-10/12"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="lg:w-5/12">
          <NextImage src={newsletter_1} />
        </div>

        <div className="font-montserrat text-white lg:w-6/12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-[700] text-[40px] lg:text-[46px] leading-none lg:leading-[56.07px]">
              Join our newsletter
            </h1>
            <p className="text-[16px] leading-[19.5px] mt-[18px]">
              No spam. Only latest Oneof news worth your attention.
            </p>
          </div>

          <div className="my-[41.5px] lg:mt-[41.5px] font-montserrat">
            <div className="flex justify-center lg:justify-start items-center h-[58px] rounded-[19px]">
              <input
                type="text"
                name="email"
                id="email"
                className="bg-[#3D3B4F] lg:w-[450px] h-full rounded-l-[5px] pl-5 outline-none"
                placeholder="Your Email"
              />
              <button
                className="px-[20px] h-full bg-brandGreen1 text-[14px] leading-[19.6px]"
                style={{
                  borderRadius: "0px 5px 5px 0px",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
