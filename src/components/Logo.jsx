import { Link } from "react-scroll";

const Logo = () => {
  return (
    <div className="flex gap-2">
      <Link to="home">
        <img
          className="w-20 h-auto hover:scale-[110%] hover:opacity-60 transition-all duration-500 cursor-pointer"
          src="./logo.png"
          alt="logo"
        />
      </Link>
      <div className="w-[250px] flex flex-col justify-center font-dellaRespira text-center leading-none text-white">
        <h1 className="text-2xl ">JCSF CENTER</h1>
        <h1 className="text-sm">INTERNATIONAL</h1>
      </div>
    </div>
  );
};

export default Logo;
