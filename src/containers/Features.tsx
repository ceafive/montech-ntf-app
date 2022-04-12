import React from "react";

const Features = () => {
  return (
    <div className="font-poppins text-brandGray1 flex justify-center items-center lg:mt-20">
      <div className="lg:flex lg:justify-between items-center w-11/12">
        <div className="text-center lg:w-3/12 mb-10 lg:mb-0">
          <h1 className="text-brandGreen1 font-[600] text-[22px] leading-[33px]">
            Branded Storefront
          </h1>
          <p className="text-[16px] leading-[24px]">
            Sell NFT’s with your own custom URL and branded Storefront
          </p>
        </div>
        <div className="text-center lg:w-3/12 mb-10 lg:mb-0">
          <h1 className="text-brandGreen1 font-[600] text-[22px] leading-[33px]">
            No Code Via Partners
          </h1>
          <p className="text-[16px] leading-[24px] text-center">
            Don't have developers? No problem! Launch your own NFT collection
            with our partners without writing a single line of code
          </p>
        </div>
        <div className="text-center lg:w-3/12 mb-10 lg:mb-0">
          <h1 className="text-brandGreen1 font-[600] text-[22px] leading-[33px]">
            Multi-file Format
          </h1>
          <p className="text-[16px] leading-[24px]">
            nameless™ supports video, images, audio and even 3D file types
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
