import { Link } from "react-scroll";

import image1 from "../assets/images/students/image3.jpg";
import image2 from "../assets/images/students/image5.jpg";

import chalk1 from "../assets/images/chalkOverlay/chalk1.png";
import chalk2 from "../assets/images/chalkOverlay/chalk2.png";

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-eksellDisplay italic">
                "Do minim do velit pariatur nulla reprehenderit esse excepteur
                sunt ipsum."
              </h1>
              <p className="flex justify-end pt-8 pr-12 lg:pr-32 font-georgiaPro opacity-80 animate-pulse">
                ~ laborum enim'
              </p>
            </div>
          </div>
          <div
            className={`hidden pt-4 px-14 gap-4 font-introRust text-lg md:flex `}
            data-aos="fade-left"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <Link
              to="about"
              className="bg-tyrianPurple rounded-full py-2 px-4 hover:opacity-50 cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-1000 ease-in-out"
            >
              ABOUT US
            </Link>
            <Link
              to="admission"
              className="bg-white text-black rounded-full py-2 px-4 hover:opacity-50 cursor-pointer hover:scale-105 hover:-translate-y-1 transition duration-1000 ease-in-out"
            >
              ADMISSION
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:hidden lg:flex ml-10 mt-20 md:mt-20 mb-36">
        <div
          className="w-[300px] h-[350px] md:h-[400px] bg-white -rotate-12 flex justify-center pt-4 animate-rotation"
          style={{
            "--rotation": "-12deg",
            "--x": "0",
            "--y": "0",
          }}
        >
          <img src={chalk1} className="h-40 absolute -right-28 -top-4 z-20" />
          <div
            className="w-4/5 h-4/5 bg-xanthous"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div
          className="w-[200px] h-[250px] bg-white rotate-12 flex justify-center pt-2 -translate-x-10 translate-y-20 animate-rotation"
          style={{
            "--rotation": "12deg",
            "--x": "-40px",
            "--y": "80px",
          }}
        >
          <img src={chalk2} className="h-40 absolute right-28 top-48 z-20" />
          <div
            className="w-4/5 h-4/5 bg-oxfordBlue"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
