import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Footer = () => {
  return (
    <div className="text-white mb-8">
      <div className="w-full mt-20 flex flex-col md:flex-row justify-between">
        <div className="flex lg:w-[50%] flex-col md:flex-row">
          <div className="lg:w-[60%] flex flex-col justify-center align-middle items-center gap-4">
            <Logo />
            <p className="px-8 text-center font-georgiaPro">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-4xl flex gap-8">
              <Link to="" target="_blank">
                <FaFacebook />
              </Link>
              <Link to="" target="_blank">
                <FaInstagram />
              </Link>
              <Link to="" target="_blank">
                <FaXTwitter />
              </Link>
            </div>
          </div>
          <div className="lg:w-[40%] mt-12 lg:mt-0 flex flex-col justify-center align-middle items-center gap-4">
            <NavBar className="p-2 flex flex-col gap-4 font-introRust text-center md:text-left" />
          </div>
        </div>

        <div className="mt-12 lg:mt-0 flex flex-col gap-4 align-middle items-center">
          <h1 className="font-introRust text-2xl">Contact Us!</h1>
          <hr className="border-lavenderBlush opacity-40 h-2 w-full" />
          <div>
            <p>
              <strong>Mobile</strong>: (555) 123-4567
            </p>
            <p>
              <strong>Landline</strong>: (555) 987-6543
            </p>
            <p>
              <strong>Address</strong>: 1234 Elm Street, Springfield, IL 62701
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
