import React from "react";

import NextImage, { ImageProps } from "next/image";

interface Props {
  title: string;
  body: string;
  image: ImageProps["src"];
  circleImage: ImageProps["src"];
}

const NFTCard = ({ title, body, image, circleImage }: Props) => {
  return (
    <div
      // className="rounded-[16px] mb-5 lg:mb-0 min-h-[400px] max-h-[500px]"
      className="w-full flex justify-center"
    >
      <div
        className="rounded-[16px] overflow-hidden w-[80%] lg:w-[90%] mb-5 lg:mb-0 min-h-[450px] max-h-[450px]"
        style={{
          backgroundColor: "rgba(255,255,255, 0.1)",
        }}
      >
        <div className="flex justify-center w-full h-[150px] md:w-[400px] md:h-[500px] lg:w-[500px] xl:w-full lg:h-[450px] xl:h-[150px] relative rounded-t-lg overflow-hidden">
          <NextImage src={image} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="-mt-[50px]">
          <NextImage src={circleImage} alt="" width={90} height={90} />
        </div>

        <div className="flex justify-center w-full py-5">
          <div className="w-9/12">
            <h1 className="font-montserrat font-[700] text-[24px] leading-[29.26px] text-center">
              {title}
            </h1>
            <p className="font-poppins text-[18px] leading-[30px] text-center mt-[26px]">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
