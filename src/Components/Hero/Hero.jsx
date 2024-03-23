/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_img from "../Assets/hero_image.png";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero h-[100vh] bg-gradient-to-b from-zinc-800 via-zinc-900 via-50% to-zinc-950  to-90% flex">
        <div className="hero-left   gap-[2vw] leading-[none] w-1/2 font-['FoundersGrotesk'] text-[2.2vw] p-[9vw]">
          <h2>New Arrivals Only</h2>
          <div className="flex flex-col leading-[6.6vw] uppercase">
            <div className="han-hand-icon flex justify-start items-center gap-[2vw]">
              <p className="text-[7vw] ">new</p>
              <img src={hand_icon} alt="handicon" className="w-[6vw]" />
            </div>
            <p className="text-[7vw]">Collections</p>
            <p className="text-[7vw]">for everyone</p>
          </div>
          <div className="latestBtn flex  mt-[3vw] w-[16vw] px-[2vw] rounded-3xl justify-between bg-amber-600 items-center py-[0.5vw]">
            <div className="latestcollection text-[1.6vw] font-medium">
              Latest Collection
            </div>
            <FaArrowCircleRight />
          </div>
        </div>
        <div className="hero-right">
          <img className="h-[90%] ml-[7vw]" src={hero_img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
