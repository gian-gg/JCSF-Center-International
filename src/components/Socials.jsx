import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <>
      <Link
        to="https://www.facebook.com/jcsfci"
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
      >
        <FaFacebook />
      </Link>
      <Link
        to=""
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <FaInstagram />
      </Link>
      <Link
        to=""
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <FaXTwitter />
      </Link>
    </>
  );
};

export default Socials;
