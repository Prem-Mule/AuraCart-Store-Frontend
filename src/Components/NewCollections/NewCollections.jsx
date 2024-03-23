/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { baseURL } = useContext(ShopContext);
  const [newcollections, setnewcollections] = useState([]);
  useEffect(() => {
    let res = fetch(`${baseURL}/newcollections`)
      .then((response) => response.json())
      .then((data) => {
        setnewcollections(data);
      });
    console.log(newcollections);
  }, []);

  return (
    <div className="NewCollections w-full h-full bg-zinc-900 flex flex-col justify-center items-center gap-[3vw]">
      <h1 className="text-[3vw] uppercase">New Collections</h1>
      <hr className="w-[5.5vw] -mt-[2.6vw]" />
      <div className="collections flex flex-wrap justify-center gap-[3vw]">
        {newcollections.map((item, index) => {
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

export default NewCollections;
