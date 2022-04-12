import React from "react";
import NextImage from "next/image";

import hero_banner from "../assets/images/hero_banner.png";
import { useWeb3 } from "@3rdweb/hooks";

const Banner = () => {
  const { address, chainId, connectWallet } = useWeb3();

  return (
    <div className="font-montserrat text-white min-h-[100vh] flex flex-col items-center justify-center">
      <div className="lg:container lg:mx-auto w-full lg:w-10/12 flex flex-col items-center">
        <h1 className="font-[600] text-[34px] lg:text-[72px] text-center lg:leading-[88px]">
          Reciprocal Interchange, Mutual Trading
        </h1>
        <p className="text-[18px] leading-[30px] text-center lg:w-7/12 mt-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis ut
          augue arcu, dui lacinia tempor, tristique morbi. Nunc velit
        </p>

        {/* <button className="bg-brandGreen1 text-white font-[600] text-[17px] leading-[25px] px-[40px] py-[20px] mt-[33px]">
          Get a Quote
        </button> */}

        <>
          {address ? (
            <div>
              <p>Address: {address}</p>
              <p>ChainId: {chainId}</p>
            </div>
          ) : (
            <div>
              <button
                className="bg-brandGreen1 text-white font-[600] text-[17px] leading-[25px] px-[40px] py-[20px] mt-[33px]"
                onClick={() => {
                  connectWallet("injected");
                }}
              >
                Connect Wallet
              </button>
            </div>
          )}
        </>

        <div className="mt-[15px]">
          <NextImage src={hero_banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
