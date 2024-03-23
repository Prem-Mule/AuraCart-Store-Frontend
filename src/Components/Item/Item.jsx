/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import '../Item/Item.css'
const Item = (props) => {
  return (
    <div className="item w-[20vw] p-[0.7vw] border-2 cursor-pointer hover:scale-[1.06] transition-all duration-[0.5]">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p className="ml-[2vw]">{props.name}</p>
      <div className="items-prices flex gap-[7vw] justify-center">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
