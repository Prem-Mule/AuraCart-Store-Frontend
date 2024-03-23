/* eslint-disable no-unused-vars */
import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-[65%]  p-[3vw] flex justify-center items-center flex-col m-auto mt-[6vw] bg-gradient-to-b from-[#fde1ff] from-0% to-[#e1ffea22] from-60% gap-[1.3vw] text-black font-['NeueMontreal'] mb-[5vw]">
      <h1 className="text-[3vw] font-semibold">
        Get Exclusive offers on your Email
      </h1>
      <p className="text-[1.1vw]">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Your email ID"
          className="outline-none rounded-2xl px-[5vw] h-[1.8vw]"
        />
        <button className="bg-zinc-900 text-white text-[1vw] px-[1.7vw] rounded-2xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
