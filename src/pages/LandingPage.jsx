import { Button, Link } from "react-scroll";

import image1 from "../assets/images/landing/image1.jpg";
import image2 from "../assets/images/landing/image2.jpg";

import chalk1 from "../assets/images/chalkOverlay/chalk1.png";
import chalk2 from "../assets/images/chalkOverlay/chalk2.png";

const Buttons = ({ to, color, textColor, label }) => {
  return (
    <Link
      to={to}
      className={`bg-${color} text-${textColor} rounded-full py-2 px-4 hover:opacity-50 cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-1000 ease-in-out whitespace-nowrap`}
    >
      {label}
    </Link>
  );
};

const PhotoCard = ({
  dimensions,
  image,
  chalk,
  chalkClass,
  rotation,
  x,
  y,
}) => {
  return (
    <div
      className={`${dimensions} bg-white flex justify-center pt-4 animate-rotation`}
      style={{
        "--rotation": rotation,
        "--x": x,
        "--y": y,
      }}
      // using forwards in tailwind.config.js to retain position
    >
      <img src={chalk} className={chalkClass} />
      <div
        className="w-4/5 h-4/5 bg-xanthous"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="pt-20 flex md:flex-row flex-col justify-center">
      <div className="flex flex-col lg:flex-row text-white mt-12 ml-4 lg:mt-32 lg:ml-20">
        {/* quote and buttons */}
        <div className="flex flex-col max-w-[680px]">
          <div
            className={`flex gap-4 lg:gap-6`}
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="bg-white h-vh w-14 opacity-50 rounded"></div>
            <div className="">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-eksellDisplay italic">
                “Educating the mind without educating the heart is no education
                at all."
              </h1>
              <p className="flex justify-end pr-12 lg:pr-32 font-georgiaPro opacity-80 animate-pulse">
                ~ Aristotle
              </p>
            </div>
          </div>
          <div
            className={`hidden pt-4 px-14 gap-4 font-introRust text-lg md:flex `}
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <Buttons
              to="about"
              color="tyrianPurple"
              textColor="white"
              label="ABOUT US"
            />
            <Buttons
              to="admission"
              color="white"
              textColor="black"
              label="ADMISSION"
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden lg:flex ml-10 mt-20 md:mt-20 mb-36 justify-center">
        <PhotoCard
          dimensions="min-w-[200px] h-[300px] md:w-[300px] md:h-[400px]"
          image={image1}
          chalk={chalk1}
          chalkClass="h-40 absolute -right-28 -top-4 z-20"
          rotation="-12deg"
          x="0"
          y="0"
        />
        <PhotoCard
          dimensions="min-w-[150px] h-[200px] md:h-[250px] md:w-[200px]"
          image={image2}
          chalk={chalk2}
          chalkClass="h-40 absolute right-28 top-48 z-20"
          rotation="12deg"
          x="-40px"
          y="80px"
        />
      </div>
    </div>
  );
};

export default LandingPage;
