/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtoCart } = useContext(ShopContext);
  return (
    <div className="product-display flex h-full ">
      <div className="productdisplay-left mr-8 flex gap-[3vw] h-full px-[6vw] shrink-0">
        <div className="productdisplay-image-list flex flex-col gap-[0.8vw]">
          <img
            className="w-[7vw] h-[7vw] object-contain mr-2"
            src={product.image}
            alt=""
          />
          <img
            className="w-[7vw] h-[7vw] object-contain mr-2"
            src={product.image}
            alt=""
          />
          <img
            className="w-[7vw] h-[7vw] object-contain mr-2"
            src={product.image}
            alt=""
          />
          <img
            className="w-[7vw] h-[7vw] object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="productdisplay-main-image ">
          <img
            className="w-full h-[30vw] object-cover"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right pr-[8vw] flex flex-col gap-[0.6vw] ">
        <h1 className="text-xl font-bold mb-2">{product.name}</h1>
        <div className="productdisplayrgt-star flex items-center mb-2">
          <img className="w-4 h-4 mr-1" src={star_icon} alt="" />
          <img className="w-4 h-4 mr-1" src={star_icon} alt="" />
          <img className="w-4 h-4 mr-1" src={star_icon} alt="" />
          <img className="w-4 h-4 mr-1" src={star_icon} alt="" />
          <img className="w-4 h-4 mr-1" src={star_dull_icon} alt="" />
          <p className="text-sm">(122)</p>
        </div>
        <div className="productdisplay-rgt-prices flex mb-2">
          <div className="productdisplay-old-price text-gray-400 mr-2 line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-old-price">${product.new_price}</div>
        </div>
        <div className="productdisplay-rgt-desc text-sm text-gray-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum
          minus excepturi autem eaque minima explicabo aliquam adipisci ratione
          nulla ipsa voluptatibus, laudantium, iure vitae maiores dolorum eius
          quasi dignissimos?
        </div>
        <div className="productdisplay-rgt-size mb-4">
          <h1 className="font-bold text-sm mb-1">Select Size</h1>
          <div className="productdisplay-rgt-sizes flex">
            <div className="w-8 h-8 border border-gray-300 flex justify-center items-center mr-2">
              S
            </div>
            <div className="w-8 h-8 border border-gray-300 flex justify-center items-center mr-2">
              M
            </div>
            <div className="w-8 h-8 border border-gray-300 flex justify-center items-center mr-2">
              L
            </div>
            <div className="w-8 h-8 border border-gray-300 flex justify-center items-center mr-2">
              XL
            </div>
            <div className="w-8 h-8 border border-gray-300 flex justify-center items-center mr-2">
              XXL
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          onClick={() => {
            addtoCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-rgt-category text-sm text-gray-300 mb-1">
          <span className="font-bold">Category :</span> Women, T-shirt, Crop-top
        </p>
        <p className="productdisplay-rgt-category text-sm text-gray-300 mb-1">
          <span className="font-bold">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
