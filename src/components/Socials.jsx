import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <>
      <Link to="https://www.facebook.com/jcsfci" target="_blank">
        <FaFacebook />
      </Link>
      <Link to="" target="_blank">
        <FaInstagram />
      </Link>
      <Link to="" target="_blank">
        <FaXTwitter />
      </Link>
    </>
  );
};

export default Socials;
