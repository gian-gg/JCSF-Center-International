import { Link } from "react-router-dom";

const NavButton = ({ className }) => {
  return (
    <Link
      className={`${className} items-center justify-center hover:opacity-50 text-xl w-48 lg:w-36 h-12 rounded-full bg-xanthous text-white`}
      to="/contact"
    >
      <div className="flex items-center justify-center align-middle">
        <p>CONTACT US</p>
        <i className="fi-sr-angle-small-right flex justify-center "></i>
      </div>
    </Link>
  );
};

export default NavButton;
