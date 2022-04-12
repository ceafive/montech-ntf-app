import React from "react";

const Footer = () => {
  return (
    <footer className="lg:h-[351px] flex flex-col justify-center items-center mt-[100px] lg:mt-[186px] text-white bg-[#3D3B4F] w-full px-5 lg:px-20">
      <div className="font-montserrat text-center lg:w-1/2 mt-10 lg:mt-0">
        <h1 className="text-[22px] leading-[26.82px] font-[800]">
          ONE-OF-BUSINESS
        </h1>
        <p className="font-avenir font-[500] text-[16px] leading-[21.86px] mt-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio odio
          aliquet vulputate ac ipsum, duis. Et cursus lorem dui sit velit. Non,
          fames mauris egestas adipiscing. Molestie nibh turpis porttitor
          iaculis.
        </p>
      </div>

      <hr className="mt-[53px] w-full" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full mt-[25px]">
        <h1 className="font-montserrat text-[14px] leading-[14px]">
          © 2022 by Freedom. All rights reserved
        </h1>
        <div className="flex justify-between font-avenir font-[400] w-full lg:w-3/12 my-5 lg:mt-0">
          <h1>Terms of Service</h1>
          <h1>Privacy policy</h1>
          <h1>Cookie Policy</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
