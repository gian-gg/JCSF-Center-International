import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="flex gap-2">
      <Link to="/">
        <img className="w-20 h-auto" src={logo} alt="logo" />
      </Link>
      <div className="w-[250px] flex flex-col justify-center font-dellaRespira text-center leading-none text-white">
        <h1 className="text-2xl">JCSF CENTER</h1>
        <h1 className="text-sm">INTERNATIONAL</h1>
      </div>
    </div>
  );
};

export default Logo;
