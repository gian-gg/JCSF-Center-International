import { Link } from "react-scroll";

const NavBarItem = ({ to, title, isBordered }) => {
  const linkClasses = isBordered
    ? "border-lavenderBlush border-opacity-50 border-2 p-2 lg:border-0 lg:p-0 cursor-pointer"
    : "hover:border-b-4 transition-all duration-300 ease-in-out border-xanthous cursor-pointer";

  return (
    <div>
      <Link to={to}>
        <p className={linkClasses}>{title}</p>
      </Link>
    </div>
  );
};

export default NavBarItem;
