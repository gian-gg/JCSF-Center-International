import NavBarItem from "./NavBarItem";

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
