/* eslint-disable no-unused-vars */
import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="rel-products flex flex-col gap-[2vw] items-center">
      <h1 className="font-['FoundersGrotesk'] text-[2.8vw]">
        Related Products
      </h1>
      <hr className=" h-[5px] w-[10%] bg-zinc-200 border-0 mt-[-1vw]" />
      <div className="rel-products-item flex gap-[3vw] p-[2vw] justify-center">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
