import { Link } from "react-scroll";

const NavBarItem = ({ to, title, isBordered }) => {
  const hrStyle = `border-lavenderBlush opacity-40 h-2 w-full ${isBordered ? "xl:hidden" : "md:hidden"}`;
  return (
    <div className="hover:scale-110 hover:-translate-y-1 hover:opacity-60 transition-transform duration-500 cursor-pointer">
      <hr className={hrStyle} />
      <Link to={to}>
        <p
          className={` whitespace-nowrap h-8 text-center hover:border-b-0 border-xanthous ${isBordered === "nav" ? "xl:hover:border-b-4" : "xl:hover:border-b-0"}`}
        >
          {title}
        </p>
      </Link>
      <hr className={hrStyle} />
    </div>
  );
};

const NavBar = ({ className, isBordered }) => {
  return (
    <div className="w-full">
      <ul className={className}>
        <li className="">
          <NavBarItem to="home" title="HOME" isBordered={isBordered} />
        </li>
        <li>
          <NavBarItem to="about" title="ABOUT JCSF" isBordered={isBordered} />
        </li>
        <li>
          <NavBarItem
            to="student"
            title="STUDENT LIFE"
            isBordered={isBordered}
          />
        </li>
        <li>
          <NavBarItem
            to="admission"
            title="ADMISSION"
            isBordered={isBordered}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
