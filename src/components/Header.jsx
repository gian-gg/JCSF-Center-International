import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Button from "./Button";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
    console.log(showNavBar);
  };

  return (
    <div className="relative font-introRust font-semibold text-lavenderBlush">
      <header className="flex w-full justify-between items-center text-sm px-4 transition-transform duration-300">
        <div className="flex items-center gap-10">
          <div className="flex gap-4">
            <Link to="/">
              <img className="w-16 h-16" src={logo} alt="logo" />
            </Link>
            <div className="flex flex-col justify-center font-dellaRespira text-center leading-none">
              <h1 className="text-2xl">JCSF CENTER</h1>
              <h1 className="text-sm">INTERNATIONAL</h1>
            </div>
          </div>
          <NavBar className="hidden xl:flex gap-8 text-base tracking-wider" />
        </div>
        <Button
          element="link"
          to="/"
          color="xanthous"
          label="Contact"
          icon="sr-angle-small-right"
          className="hidden xl:flex"
        />

        {!showNavBar && (
          <button
            className="block xl:hidden hover:opacity-50"
            onClick={toggleNavBar}
          >
            <i className="fi-sr-bars-staggered text-2xl"></i>
          </button>
        )}
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full bg-tyrianPurple transition-transform duration-300 transform ${
          showNavBar ? "translate-x-0" : "translate-x-full"
        } z-50`} // Ensures the menu is above other content
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button className="m-2 hover:opacity-50" onClick={toggleNavBar}>
              <i className="fi-sr-cross-small text-2xl"></i>
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
              element="link"
              to="/"
              color="xanthous"
              label="Contact"
              icon="sr-angle-small-right"
              className="flex"
            />

            <NavBar className="w-full p-2 flex flex-col gap-4" />
          </div>
        </div>
      </div>

      {/* Dark background overlay when menu is open */}
      {showNavBar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleNavBar}
        />
      )}
    </div>
  );
};

export default Header;
