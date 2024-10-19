import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";

const Button = ({ element, to, className, color, label, arrow }) => {
  const Component = element === "button" ? "button" : Link;

  return (
    <Component
      to={element === "button" ? undefined : to}
      className={`${className} items-center justify-center hover:opacity-50 text-xl w-48 lg:w-42 h-12 rounded-full bg-${color} text-white font-introRust`}
    >
      <div className="flex items-center justify-center align-middle">
        <p>{label}</p>
        {arrow === "True" && <FaAngleRight />}
      </div>
    </Component>
  );
};

export default Button;
