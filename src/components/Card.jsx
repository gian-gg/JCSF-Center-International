import { Link } from "react-router-dom";

const Card = ({ className, url, color }) => {
  return (
    <div
      className={`bg-${color} h-96 lg:w-64 w-[90%] rounded-3xl ${className}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Card;
