import { Link } from "react-router-dom";

const Card = ({ className, url, height, width, color }) => {
  return (
    <div
      className={`bg-${color} h-${height} lg:w-${width} w-[90%] rounded-3xl ${className}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Card;
