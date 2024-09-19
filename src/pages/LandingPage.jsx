import Header from "../components/Header";

import { Link } from "react-router-dom";

import kids from "../assets/images/kids2.png";

const LandingPage = () => {
  return (
    <div className="pt-4">
      <Header />
      <div className="flex flex-col lg:flex-row text-lavenderBlush mt-12 ml-4 lg:mt-32 lg:ml-20">
        {/* quote and buttons */}
        <div className="flex flex-col max-w-[680px]">
          <div className="flex gap-4 lg:gap-6">
            <div className="bg-xanthous lg:bg-lavenderBlush h-vh w-14 opacity-50 rounded"></div>
            <div className="">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-eksellDisplay italic">
                "Do minim do velit pariatur nulla excepteur reprehenderit esse
                excepteur sunt ipsum."
              </h1>
              <p className="flex justify-end pr-12 lg:pr-32 font-georgiaPro opacity-80">
                ~ laborum enim'
              </p>
            </div>
          </div>
          <div className="hidden lg:flex px-14 gap-4 font-introRust text-lg">
            <Link className="bg-tyrianPurple rounded-full py-2 px-4 hover:opacity-50">
              ABOUT US
            </Link>
            <Link className="bg-lavenderBlush text-black rounded-full py-2 px-4 hover:opacity-50">
              ADMISSION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
