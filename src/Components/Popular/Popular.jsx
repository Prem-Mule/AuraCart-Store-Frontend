/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import "../Popular/Popular.css";
const Popular = () => {
  const [popularproducts, setpopularproducts] = useState([]);
  useEffect(() => {
    let res = fetch("http://localhost:4000/popularproducts")
      .then((res) => res.json())
      .then((data) => {
        setpopularproducts(data);
      });
  }, []);

  return (
    <div className="popular mt-[1.4vw] flex flex-col justify-center items-center gap-[1vw] px-[2vw]">
      <h1 className="font-['NeueMontreal'] uppercase text-[2.5vw]">
        Popular in Women
      </h1>
      <hr className="w-full mb-[1vw]" />
      <div className="popular-item flex gap-[2vw] flex-wrap justify-center">
        {popularproducts.map((item, index) => {
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

export default Popular;
