/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="shop-category p-[3vw] flex flex-col ">
        <img src={props.banner} alt="" />
        <div className="shop-category-indexsort font-['NeueMontreal'] text-[1.4vw]">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
        <div className="shopcategory-products m-auto flex flex-wrap justify-center gap-4">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-exploremore flex justify-center py-[2vw]">
          <h1 className="bg-zinc-200 px-[2vw] py-[1vw] rounded-3xl text-zinc-900 font-semibold">
            Explore More
          </h1>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
