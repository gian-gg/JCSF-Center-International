import { Link } from "react-scroll";

const NavBarItem = ({ to, title, isBordered }) => {
  const hrStyle = `border-lavenderBlush opacity-40 h-2 w-full ${isBordered ? "xl:hidden" : "md:hidden"}`;
  return (
    <div className="hover:scale-110 hover:-translate-y-1 hover:opacity-60 transition-transform duration-500 cursor-pointer">
      <hr className={hrStyle} />
      <Link to={to}>
        <p
          className={`h-8 text-center hover:border-b-0 border-xanthous ${isBordered === "nav" ? "xl:hover:border-b-4" : "xl:hover:border-b-0"}`}
        >
          {title}
        </p>
      </Link>
      <hr className={hrStyle} />
    </div>
  );
};

export default NavBarItem;
