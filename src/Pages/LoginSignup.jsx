/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setstate] = useState("login");
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const login = async () => {
    let response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let data = await response.json();
    // console.log("response: ", response);
    // console.log("data: ", data);
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.error);
    }
    console.log("login executed", formData);
  };
  const signup = async () => {
    let response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.error);
    }
  };
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-signup bg-zinc-800 h-screen flex justify-center items-center">
      <div className="loginsignup-container bg-gradient-to-br from-zinc-800 to-zinc-400 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">{state}</h1>
        <div className="loginsignup-fields mb-4 text-black">
          {state === "signup" ? (
            <input
              className="w-full border rounded py-2 px-3 mb-2"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              required
            />
          ) : (
            <></>
          )}
          <input
            className="w-full border rounded py-2 px-3 mb-2"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            required
          />
          <input
            className="w-full border rounded py-2 px-3 mb-2"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            state === "signup" ? signup() : login();
          }}
        >
          Continue
        </button>
        {state === "signup" ? (
          <p className="login mt-4 text-sm">
            Already have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setstate("Login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="login mt-4 text-sm">
            Create an Account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setstate("signup");
              }}
            >
              Click here
            </span>
          </p>
        )}
        {state === "signup" ? (
          <div className="login-signup-agree mt-4">
            <input type="checkbox" name="" id="" className="mr-2" />
            <p className="text-sm">
              By continuing, I agree to the terms of use & privacy policy
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
