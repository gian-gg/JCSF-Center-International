import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Social = ({ to, IconComponent, delay }) => {
  return (
    <div className="hover:scale-110 hover:-translate-y-1 hover:brightness-150 transition-transform duration-500">
      <Link
        to={to}
        target="_blank"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay={delay}
      >
        {IconComponent && <IconComponent />}
      </Link>
    </div>
  );
};

const Socials = () => {
  return (
    <>
      <Social
        delay="0"
        to="https://www.facebook.com/jcsfci"
        IconComponent={FaFacebook}
      />
      <Social delay="200" to="" IconComponent={FaInstagram} />
      <Social delay="400" to="" IconComponent={FaTelegram} />
    </>
  );
};

export default Socials;
