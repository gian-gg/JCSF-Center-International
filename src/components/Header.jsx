import { Link } from "react-router-dom";
import { useState } from "react";

import NavBar from "./NavBar";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="font-anton font-semibold text-white">
      <header className="flex w-full justify-between items-center text-sm px-4">
        <div className="flex text-center items-center gap-10">
          <div className="flex gap-4">
            <Link to="/">
              <img className="w-16 h-16" src={logo} alt="logo" />
            </Link>
            <div className="flex flex-col justify-center font-dellaRespira text-center leading-none">
              <h1 className="text-2xl">JCSF CENTER</h1>
              <h1 className="text-md">INTERNATIONAL</h1>
            </div>
          </div>
          <NavBar className="hidden lg:flex gap-8 text-lg tracking-wider" />
        </div>

        <Link className="text-xl w-36 h-12 rounded-full bg-gray-100 text-slate-400 text-center items-center flex justify-center">
          CHECK US OUT {">"}
        </Link>

        {!showNavBar ? (
          <div className="block lg:hidden">
            <button
              className="block lg:hidden"
              onClick={() => {
                if (!showNavBar) {
                  setShowNavBar(true);
                }
              }}
            >
              <i className="fi-sr-bars-staggered text-2xl"></i>
            </button>
          </div>
        ) : (
          <div className="button">
            <button
              className="block lg:hidden"
              onClick={() => {
                if (showNavBar) {
                  setShowNavBar(false);
                }
              }}
            >
              <i className="fi-sr-cross text-2xl"></i>
            </button>
          </div>
        )}
      </header>
      {showNavBar && (
        <nav className="flex flex-col justify-center align-middle items-center text-center p-6 rounded-xl animate-dropdown backdrop-blur-sm border-white border-2 border-solid border-opacity-10 drop-shadow-xl">
          <NavBar className="flex flex-col gap-2" />
        </nav>
      )}
    </div>
  );
};

export default Header;
