import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Button = ({ element, to, className, color, label, arrow, onClick }) => {
  const Component = element === "button" ? "button" : Link;

  return (
    <Component
      to={element === "button" ? undefined : to}
      onClick={(e) => {
        // Prevent default action if it's a Link
        if (element === "link" && onClick) {
          e.preventDefault(); // Prevent default link behavior
          onClick(); // Call the onClick function
        } else if (element === "button" && onClick) {
          onClick(); // Call the onClick function for button
        }
      }}
      className={`${className} items-center justify-center hover:opacity-50 text-xl w-48 lg:w-42 h-12 rounded-full bg-${color} text-white font-introRust hover:scale-[110%] hover:-translate-y-1 hover:opacity-60 transition-all duration-500`}
    >
      <div className="flex items-center justify-center align-middle">
        <p>{label}</p>
        {arrow === "True" && <FaAngleRight />}
      </div>
    </Component>
  );
};

export default Button;
