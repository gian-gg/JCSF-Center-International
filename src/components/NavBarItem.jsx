import { Link } from "react-router-dom";

const NavBarItem = ({ to, title }) => {
  return (
    <Link
      className="hover:border-b-4 transition-all duration-300 ease-in-out border-xanthous"
      to={to}
    >
      {title}
    </Link>
  );
};

export default NavBarItem;
