/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import { IoCart } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  const url = useLocation().pathname;
  const { getCountOfCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="navbar text-[1vw] font-['NeueMontreal'] flex justify-between p-[1.4vw]">
        <div className="nav-logo flex items-center ml-[2vw] gap-[3vw]">
          <img src={logo} alt="logo" className="w-[2.9vw]" />
          <h1 className="font-semibold tracking-widest text-[1.4vw]">
            <Link to={"/"}>SHOPPER</Link>
          </h1>
        </div>
        <div className="categories flex items-center">
          <ul className="nav-menu flex text-[1.2vw] gap-[5vw] font-medium mr-[15vw] cursor-pointer items-center">
            <li
              className="flex flex-col gap-[0.6vw]"
              onClick={() => {
                setmenu("Shop");
              }}
            >
              <Link to="/">Shop</Link>
              {menu === "Shop" && url === "/" ? (
                <hr className="border-red-600 font-bold border-[1.5px] rounded-full" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="flex flex-col gap-[0.6vw]"
              onClick={() => {
                setmenu("Men");
              }}
            >
              <Link to="/men">Men</Link>
              {menu === "Men" && url === "/men" ? (
                <hr className="border-red-600 font-bold border-[1.5px] rounded-full" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="flex flex-col gap-[0.6vw]"
              onClick={() => {
                setmenu("Women");
              }}
            >
              <Link to="/women">Women</Link>
              {menu === "Women" && url === "/women" ? (
                <hr className="border-red-600 font-bold border-[1.5px] rounded-full" />
              ) : (
                <></>
              )}
            </li>
            <li
              className="flex flex-col gap-[0.6vw]"
              onClick={() => {
                setmenu("Kids");
              }}
            >
              <Link to="/kids">kids</Link>
              {menu === "Kids" && url === "/kids" ? (
                <hr className="border-red-600 font-bold border-[1.5px] rounded-full" />
              ) : (
                <></>
              )}
            </li>
          </ul>
          {localStorage.getItem("auth-token") ? (
            <button
              className="font-semibold text-[1.4vw] mr-[3vw] active:bg-zinc-700 duration-300 rounded-full border-[0.5px] px-[1.4vw]"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              <Link to="/login">Logout</Link>
            </button>
          ) : (
            <button className="font-semibold text-[1.4vw] mr-[3vw] active:bg-zinc-700 duration-300 rounded-full border-[0.5px] px-[1.4vw]">
              <Link to="/login">Login</Link>
            </button>
          )}
          <Link to="/cart">
            <IoCart size={"2.4vw"} />
          </Link>
          <div className="nav-cart-count bg-amber-200 w-[1.3vw] h-[full] rounded-full mt-[-1.2vw] ml-[-0.6vw] text-black text-[1vw] font-semibold flex items-center justify-center">
            {getCountOfCartItems()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
