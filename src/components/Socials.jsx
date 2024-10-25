import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <Link
        to="https://www.facebook.com/jcsfci"
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <FaFacebook />
      </Link>
      <Link
        to=""
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <FaInstagram />
      </Link>
      <Link
        to=""
        target="_blank"
        className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay="400"
      >
        <FaTelegram />
      </Link>
    </>
  );
};

export default Socials;
