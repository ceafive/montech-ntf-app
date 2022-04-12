import React from "react";
import Slider from "react-slick";
import NFTCard from "../components/NFTCard";

import artiste1 from "../assets/images/artiste1.png";
import aritiste2 from "../assets/images/aritiste2.png";
import artiste3 from "../assets/images/artiste3.png";
import artiste3circle from "../assets/images/artiste3circle.png";
import artiste2circle from "../assets/images/artiste2circle.png";
import rihanna from "../assets/images/rihanna.png";
import artiste1circle from "../assets/images/artiste1circle.png";
import rihannacircle from "../assets/images/rihannacircle.png";

var settings = {
  dots: false,
  infinite: true,
  centerMode: false,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const NFTCollections = () => {
  return (
    <div className="text-center text-white mt-[95px] lg:mt-[190px] w-full">
      <h1 className="font-montserrat text-[36px] lg:text-[48px] leading-[58.51px] font-[600]">
        Checkout Our NFT Collections
      </h1>
      <p className="font-poppins text-[20px] lg:text-[16px] leading-[24px] mt-[20px]">
        Here are some of the top projects we’ve launched.
      </p>

      <div className="mt-5 lg:mt-[80px]">
        <Slider {...settings}>
          <NFTCard
            title="Rihanna’s Collection"
            body="Artist creating #JOYWORLD to make you feel JOYful and creative!"
            image={rihanna}
            circleImage={rihannacircle}
          />

          <NFTCard
            title="Big Dawg Collection"
            body="Official 4/20 drop between Nyan Cat and the one and only Snoop Dogg!"
            image={artiste1}
            circleImage={artiste1circle}
          />

          <NFTCard
            title="Artist Bang Collection"
            body="A Non-Fungible access token project by Gary Vee."
            image={aritiste2}
            circleImage={artiste2circle}
          />

          <NFTCard
            title="Trap Boys Collection"
            body="Generative Art Stored on the Blockchain"
            image={artiste3}
            circleImage={artiste3circle}
          />
          <NFTCard
            title="Rihanna’s Collection"
            body="Artist creating #JOYWORLD to make you feel JOYful and creative!"
            image={rihanna}
            circleImage={rihannacircle}
          />

          <NFTCard
            title="Big Dawg Collection"
            body="Official 4/20 drop between Nyan Cat and the one and only Snoop Dogg!"
            image={artiste1}
            circleImage={artiste1circle}
          />

          <NFTCard
            title="Artist Bang Collection"
            body="A Non-Fungible access token project by Gary Vee."
            image={aritiste2}
            circleImage={artiste2circle}
          />

          <NFTCard
            title="Trap Boys Collection"
            body="Generative Art Stored on the Blockchain"
            image={artiste3}
            circleImage={artiste3circle}
          />
        </Slider>
      </div>
    </div>
  );
};

export default NFTCollections;
