import NavBarItem from "./NavBarItem";

const NavBar = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavBarItem to="/" title="HOME" />
      </li>
      <li>
        <NavBarItem to="/" title="ABOUT JCSF" />
      </li>
      <li>
        <NavBarItem to="/" title="SERVICES" />
      </li>
      <li>
        <NavBarItem to="/" title="STUDENT LIFE" />
      </li>
      <li>
        <NavBarItem to="/" title="ADMISSION" />
      </li>
    </ul>
  );
};

export default NavBar;
