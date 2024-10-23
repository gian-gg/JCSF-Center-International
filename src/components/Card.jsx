import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Card = ({ className, color, backgroundImage, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-96 w-4/5 lg:w-64 rounded-3xl ${className} bg-${color} translate-x-0`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white w-12 h-12 text-3xl p-2 rounded-full absolute right-8 top-8">
        <HiMiniArrowSmallRight />
      </div>
      <h1 className="text-black font-introRust bg-white p-2 w-32 font-bold rounded-lg text-center absolute left-8 bottom-8">
        {title}
      </h1>
    </button>
  );
};

export default Card;
