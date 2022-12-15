import React from "react";
import { SlBasket } from "react-icons/sl";
import logo from "../assets/img/logo.png";
export const Header = () => {
  return (
    <header className="p-10 border-b-2">
      <div className="container flex justify-between ">
        <div className="flex gap-3 w-full items-center">
          <img width="38" src={logo} alt="Pizza logo" />
          <div className="">
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="bg-orange-400 flex items-center px-2 py-1 rounded-3xl">
          <a href="/" className="flex gap-2 items-center">
            <b>520грн</b>
            <span className="font-light text-white">|</span>

            <div className="flex items-center gap-1">
              <SlBasket />
              <b>3</b>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
