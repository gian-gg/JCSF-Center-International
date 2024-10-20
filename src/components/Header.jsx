import React, { useState, useEffect } from "react";
import Logo from "./Logo";

import { Link } from "react-router-dom";
import useDetectScroll from "@smakss/react-scroll-direction";

import NavBar from "./NavBar";
import Button from "./Button";

import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => setShowNavBar(!showNavBar);

  const scrollDirection = useDetectScroll();
  let scrollDirect = scrollDirection.scrollDir;

  useEffect(() => {
    if (showNavBar) {
      toggleNavBar();
    }
  }, [scrollDirect]);

  return (
    <div className="w-full font-introRust font-semibold text-lavenderBlush">
      <header className="flex w-full justify-between xl:justify-center xl:items-center text-sm px-4 duration-300">
        <div className="flex items-center gap-10">
          <Logo />
          <NavBar className="hidden xl:flex gap-8 text-base tracking-wider" />
        </div>
        <Button
          element="link"
          to="/"
          color="xanthous"
          label="Contact"
          arrow="True"
          className="hidden xl:flex"
        />

        {!showNavBar && (
          <button
            className="block xl:hidden hover:opacity-50 text-4xl"
            onClick={toggleNavBar}
          >
            <LuMenu />
          </button>
        )}
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-[200%] bg-tyrianPurple duration-300  ${
          showNavBar ? "translate-x-0" : "translate-x-full"
        } z-50`} // Ensures the menu is above other content
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button
              className="m-2 hover:opacity-50 text-4xl"
              onClick={toggleNavBar}
            >
              <MdOutlineClose />
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <NavBar
              className="w-full p-2 flex flex-col gap-4"
              isBordered="True"
            />

            <Button
              element="link"
              to="/"
              color="xanthous"
              label="Contact"
              arrow="True"
              className="flex"
            />
          </div>
        </div>
        <div className="mt-4 font-robotoMono text-sm px-8 opacity-80">
          <p>© 2024, JCSF International</p>
          <p>
            Designed by:{" "}
            <Link
              to="https://github.com/gian-gg"
              target="_blank"
              className="underline text-xanthous"
            >
              gian.gg
            </Link>
          </p>
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
