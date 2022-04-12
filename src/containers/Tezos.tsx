import React from "react";
import NextImage from "next/image";
import tezos from "../assets/images/tezos.png";

const Tezos = () => {
  return (
    <div className="font-montserrat  text-white pt-10 flex justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-10/12">
        <div className="w-full lg:w-10/12 text-center lg:text-left">
          <h1 className="text-[#34D399]  font-[600] text-[22px] leading-[26.82px] ">
            Built On Tezos
          </h1>
          <h1 className="font-[600] text-[46px] leading-[56.07px] mt-[12px]">
            The Green NFT platform that connects artists and fans.
          </h1>

          <p className=" text-[18px] leading-[21.94px] mt-[12px] lg:w-9/12 text-center lg:text-left">
            OneOf is built on the Tezos blockchain, an energy efficient
            proof-of-stake network. OneOf chose Tezos because of its energy
            efficient design as well as its unique ability to self-amend,
            allowing it to undergo regular upgrades that keep it at the cutting
            edge of innovation.
          </p>
        </div>

        <div className="mt-5 lg:mt-0 lg:w-6/12">
          <NextImage src={tezos} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Tezos;
