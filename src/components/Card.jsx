import { Link } from "react-router-dom";

import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Card = ({ className, url, color, backgroundImage, title }) => {
  return (
    <Link
      to={url}
      className={`h-96 lg:w-64 w-[90%] rounded-3xl ${className} bg-${color}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-12 h-12 text-3xl p-2 rounded-full ml-72 md:ml-641 lg:ml-44 mt-8">
        <HiMiniArrowSmallRight />
      </div>
      <h1 className="text-black font-introRust bg-white p-2 w-32 font-bold rounded-lg text-center mt-60 ml-8">
        {title}
      </h1>
    </Link>
  );
};

export default Card;
