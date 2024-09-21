import { Link } from "react-router-dom";

const TopLink = ({ className, link }) => {
  return (
    <div
      className={`${className} h-96 lg:w-64 w-[90%] rounded-3xl`}
      style={{
        backgroundImage: `url(${link})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default TopLink;
