import NavBarItem from "./NavBarItem";

const NavBar = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavBarItem to="/" title="HOME" />
      </li>
      <li>
        <NavBarItem to="/" title="ABOUT US" />
      </li>
      <li>
        <NavBarItem to="/" title="SERVICES" />
      </li>
      <li>
        <NavBarItem to="/" title="CONTACTS" />
      </li>
    </ul>
  );
};

export default NavBar;
