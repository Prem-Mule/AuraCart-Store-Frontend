/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum flex gap-[1vw] text-[0.8vw] font-semibold mb-[7vw] px-[4vw] font-[`NeueMontreal`] uppercase">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
