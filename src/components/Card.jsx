import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Card = ({ className, color, backgroundImage, title, onClick, arrow }) => {
  return (
    <button
      onClick={() => {
        arrow ? onClick() : null;
      }}
      className={`h-96 w-4/5 lg:w-64 rounded-3xl ${arrow ? "arrow-cursor" : "cursor-default"} ${className} bg-${color} translate-x-0 hover:scale-105 hover:-translate-y-8 transition duration-700 ease-in-out hover:brightness-125 animate-slideInDown`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {arrow && (
        <div className="bg-white w-12 h-12 text-3xl p-2 rounded-full absolute right-8 top-8">
          <HiMiniArrowSmallRight />
        </div>
      )}
      <h1 className="text-black font-introRust bg-white p-2 font-bold rounded-lg text-center absolute left-8 bottom-8 whitespace-nowrap">
        {title}
      </h1>
    </button>
  );
};

export default Card;
