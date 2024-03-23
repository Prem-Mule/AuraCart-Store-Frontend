/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "../CartItems/CartItems.css";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmmount } =
    useContext(ShopContext);

  return (
    <div className="cart-items pt-16 m-auto min-h-[80vh] bg-zinc-800">
      <div className="cart-items-format-main-6 grid grid-cols-6 gap-[3vw] p-[2vw] justify-items-center py-4 text-zinc-300 font-semibold">
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center  ">Products</p>
        </div>
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center text-[1.5vw]">Title</p>
        </div>
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center text-[1.5vw]">Price</p>
        </div>
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center text-[1.5vw]">Quantity</p>
        </div>
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center text-[1.5vw]">Total</p>
        </div>
        <div className="w-[100%] h-[3vw] ">
          <p className="w-[100%] flex justify-center text-[1.5vw]">Remove</p>
        </div>
      </div>
      <hr className="border-0 h-[2px] bg-zinc-200 mb-[2vw] w-[90%] m-auto" />

      {/* Check if cart is empty */}
      {Object.values(cartItems).every((value) => value === 0) ? (
        <p className="text-center text-zinc-300">Your cart is empty</p>
      ) : (
        // Map through all products and display cart items
        all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="cart-items-format grid grid-cols-6 grid-cols-0.5fr 2fr 1fr 1fr 1fr 1fr justify-items-center px-[2vw] text-zinc-300"
              >
                <div className="w-[100%] h-[8vw] flex justify-center">
                  <img src={item.image} alt="" className="h-full" />
                </div>
                <div className="w-[100%] h-[8vw]">
                  <p className="flex justify-center items-center text-[1.2vw]">
                    {item.name}
                  </p>
                </div>
                <div className="w-[100%] h-[8vw]">
                  <p className="w-[100%] flex justify-center text-[1.2vw]">
                    ${item.new_price}
                  </p>
                </div>
                <div className="w-[100%] h-[8vw]">
                  <button className="w-[100%] flex justify-center text-[1.2vw]">
                    {cartItems[item.id]}
                  </button>
                </div>
                <div className="w-[100%] h-[8vw]">
                  <p className="w-[100%] flex justify-center text-[1.2vw]">
                    ${item.new_price * cartItems[item.id]}
                  </p>
                </div>
                <div className="w-[100%] flex justify-center h-[8vw]">
                  <img
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                    className="h-[2vw] cursor-pointer"
                  />
                </div>
              </div>
            );
          }
          return null;
        })
      )}
      <div className="cart-items-down flex  px-[8vw] mt-[4vw] py-[4vw] border-2 w-full font-['NeueMontreal']">
        <div className="cart-items-total w-[100%]">
          <h1 className="text-[1.6vw] font-semibold">Cart Totals</h1>
          <div className="flex flex-col gap-[1vw] py-[2vw]">
            <div className="cart-item-total-item text-[1.1vw] flex justify-between text-zinc-400">
              <p>Subtotal</p>
              <p>${getTotalCartAmmount()}</p>
            </div>
            <hr />
            <div className="cart-item-total-item  flex justify-between  text-zinc-400">
              <p className="text-[1.3vw]">Shipping Fee</p>
              <p className="text-[1.3vw]">Free</p>
            </div>
            <hr />
            <div className="cart-item-total-item  flex justify-between font-bold">
              <h3 className="text-[1.3vw]">Total</h3>
              <h3>${getTotalCartAmmount()}</h3>
            </div>
          </div>
          <button className="font-semibold bg-amber-500 text-zinc-100 px-[2vw] py-[0.7vw] text-[1.5vw] rounded-xl active:bg-amber-300">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-item-promocode w-[100%] pl-[14vw] flex flex-col gap-[1.4vw]">
          <p className="text-[1.5vw]">
            If you have any promo code, Enter it here
          </p>
          <div className="cart-item-promobox flex gap-[1vw]">
            <input type="text" placeholder="promo code" className="w-[65%]" />
            <button className="bg-zinc-700 px-[1.2vw] rounded-lg text-[1.6vw]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
