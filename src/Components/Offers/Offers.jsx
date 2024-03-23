/* eslint-disable no-unused-vars */
import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import '../Offers/Offers.css'
const Offers = () => {
  return (
    <div className="offers mt-[5vw] m-auto mb-[5vw] flex w-[65%] h-[60vh] px-[5vw]  bg-gradient-to-b from-[#fde1ff] from-0% to-[#e1ffea22] from-60% ">
      <div className="offers-left py-[4vw] flex flex-1 flex-col text-black font-['NeueMontreal'] font-semibold leading-[4.4vw]">
        <h1 className="text-[3.7vw]">Exclusive</h1>
        <h1 className="text-[3.7vw]">Offers For You</h1>
        <p className="text-[1.1vw] uppercase tracking-wider mt-[2vw]">
          Only on best sellers products
        </p>
        <button className="w-[10vw] px-[1.5vw] py-[0.8vw] rounded-xl bg-orange-600 leading-none text-white tracking-widest">
          Check Now
        </button>
      </div>
      <div className="offers-right ">
        <img src={exclusive_image} alt="" className="h-[60vh] " />
      </div>
    </div>
  );
};

export default Offers;
