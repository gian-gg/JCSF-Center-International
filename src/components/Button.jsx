import { Link } from "react-router-dom";

const Button = ({ element, to, className, color, label, icon }) => {
  const Component = element === "button" ? "button" : Link;

  return (
    <Component
      to={element === "button" ? undefined : to}
      className={`${className} items-center justify-center hover:opacity-50 text-xl w-48 lg:w-42 h-12 rounded-full bg-${color} text-white font-introRust`}
    >
      <div className="flex items-center justify-center align-middle">
        <p>{label}</p>
        <i className={`fi-${icon} flex justify-center `}></i>
      </div>
    </Component>
  );
};

export default Button;
