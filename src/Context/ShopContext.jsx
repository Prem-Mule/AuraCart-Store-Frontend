/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState({});
  const [all_product, setall_product] = useState([]);
  const baseURL = "https://auracart-store-backend.onrender.com";
  useEffect(() => {
    fetch(`${baseURL}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        setall_product(data);
        if (localStorage.getItem("auth-token")) {
          let res = fetch(`${baseURL}/getcart`, {
            method: "GET",
            headers: {
              Accept: "application/form-data",
              "auth-token": `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => setcartItems(data.cartdata));
          // fetch(`${baseURL}/getcart", {
          //   method: "POST",
          //   headers: {
          //     Accept: "application/form-data",
          //     "auth-token": `${localStorage.getItem("auth-token")}`,
          //     "Content-Type": "application/json",
          //   },
          //   body: "",
          // })
          //   .then((res) => res.json())
          //   .then((data) => setcartItems(data.cartdata));
        } else {
          const defaultCart = getDefaultcart(data);
          setcartItems(defaultCart);
        }
      });
  }, []);

  const getDefaultcart = (products) => {
    let cart = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const addtoCart = (itemId) => {
    if (localStorage.getItem("auth-token")) {
      fetch(`${baseURL}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      setcartItems((previous) => ({
        ...previous,
        [itemId]: ++previous[itemId],
      }));
    } else {
      alert("Login First and enjoy shopping");
    }
  };

  const removeFromCart = (itemId) => {
    if (localStorage.getItem("auth-token")) {
      fetch(`${baseURL}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ removeitemid: itemId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("removefromcart: ", data);
        });
      setcartItems((previouscartData) => ({
        ...previouscartData,
        [itemId]: --previouscartData[itemId],
      }));
    } else {
      alert("Login First and enjoy shopping");
    }
  };

  const getTotalCartAmmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };

  const getCountOfCartItems = () => {
    let count = 0;
    Object.values(cartItems).forEach((value) => {
      if (value > 0) {
        count = count + value;
      }
    });
    return count;
  };

  const contextValue = {
    all_product,
    cartItems,
    addtoCart,
    removeFromCart,
    getTotalCartAmmount,
    getCountOfCartItems,
    baseURL,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
