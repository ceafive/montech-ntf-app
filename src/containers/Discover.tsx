import React from "react";
import NextImage from "next/image";
import discover from "../assets/images/discover.png";
import dashboard from "../assets/images/dashboard.png";
import nft from "../assets/images/nft.png";
import nfts from "../assets/images/nfts.png";

const Discover = () => {
  return (
    <>
      <div className="text-white font-inter pt-10 flex justify-center mt-[50px] lg:mt-[200px]">
        <div className="flex flex-col-reverse lg:flex-row  justify-between items-center w-full lg:w-10/12">
          <div className="text-center lg:text-left lg:w-6/12">
            <h1 className="font-[700] text-[36px] leading-[43.57px]">
              Discover and buy extraordinary NFTs from Marketplace built on BSC,
              FTM and Polygon
            </h1>

            <div className="mt-10 flex justify-center lg:block">
              <button className="font-montserrat text-[17px] leading-[25px] border border-white px-4 py-2 flex items-center">
                <span className="mr-2">Learn More</span>
                <ion-icon name="arrow-forward-sharp"></ion-icon>
              </button>
            </div>
          </div>

          <div className="lg:w-5/12">
            <NextImage src={discover} />{" "}
          </div>
        </div>
      </div>

      <div className="text-white font-inter pt-10 flex justify-center mt-[50px] lg:mt-[200px]">
        <div className="flex flex-col lg:flex-row  justify-between items-center w-full lg:w-10/12">
          <div className="lg:w-6/12">
            <NextImage src={dashboard} />{" "}
          </div>

          <div className="text-center lg:text-left lg:w-5/12">
            <h1 className="font-[700] text-[36px] leading-[43.57px]">
              Track all your reports, review sales and keep growing
            </h1>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[46px]">
              Updated Reports
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[60px]">
              Revenue Updates
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>
          </div>
        </div>
      </div>

      <div className="text-white font-inter pt-10 flex justify-center mt-[50px] lg:mt-[200px]">
        <div className="flex flex-col lg:flex-row  justify-between items-center w-full lg:w-10/12">
          <div className="text-center lg:text-left lg:w-5/12">
            <h1 className="font-[700] text-[36px] leading-[43.57px]">
              Create and add NFt’s Collections, Artists...
            </h1>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[46px]">
              Easy Updates and Creation
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[60px]">
              Edit, Delete or Duplicate
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>
          </div>

          <div className="lg:w-6/12">
            <NextImage src={nft} />{" "}
          </div>
        </div>
      </div>

      <div className="text-white font-inter pt-10 flex justify-center mt-[50px] lg:mt-[200px]">
        <div className="flex flex-col-reverse lg:flex-row  justify-between items-center w-full lg:w-10/12">
          <div className="lg:w-6/12">
            <NextImage src={nfts} />{" "}
          </div>

          <div className="text-center lg:text-left lg:w-5/12">
            <h1 className="font-[700] text-[36px] leading-[43.57px]">
              Browse through our massive NFT marketplace
            </h1>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[46px]">
              Mint Full Collections
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>

            <h3 className="font-montserrat font-[700] text-[20px] leading-[25px] mt-[60px]">
              Checkout Single NFT’s
            </h3>

            <p className="font-montserrat text-[18px] leading-[25px] mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              vitae aliquam cursus sit amet, cum molestie viverra
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
