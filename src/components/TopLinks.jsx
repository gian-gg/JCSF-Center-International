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
    >
      {/* <Link
        href=""
        className="bg-lavenderBlush border border-transparent rounded-full p-4 hover:brightness-125 transition-colors h-14 opacity-80"
      >
        <i className="fi-sr-angle-small-right"></i>
      </Link> */}
    </div>
  );
};

export default TopLink;
