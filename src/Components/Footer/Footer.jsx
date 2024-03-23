/* eslint-disable no-unused-vars */
import React from "react";
import footer_logo from "../Assets/logo_big.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img src={footer_logo} alt="" className="h-10 mr-2" />
            <p className="text-lg font-bold">SHOPPER</p>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-300">Company</Link>
            </li>
            <li>
              <Link className="hover:text-gray-300">Products</Link>
            </li>
            <li>
              <Link className="hover:text-gray-300">Offices</Link>
            </li>
            <li>
              <Link className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <div className="footer-icons-container">
            <FaInstagram className="text-xl hover:text-gray-300" />
          </div>
          <div className="footer-icons-container">
            <FaWhatsapp className="text-xl hover:text-gray-300" />
          </div>
          <div className="footer-icons-container">
            <FaPinterest className="text-xl hover:text-gray-300" />
          </div>
        </div>
        <div className="footer-copyright mt-8 text-center">
          <hr className="border-gray-600 my-4" />
          <p className="text-sm">Copyright @2024 - All Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
