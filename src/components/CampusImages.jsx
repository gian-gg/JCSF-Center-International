import { useState } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import campus1 from "../assets/images/campus/campus1.jpg";
import campus2 from "../assets/images/campus/campus2.jpg";
import campus3 from "../assets/images/campus/campus3.jpg";
import campus4 from "../assets/images/campus/campus4.jpg";
import campus5 from "../assets/images/campus/campus5.jpg";

const CampusImages = () => {
  const campusData = [
    {
      src: campus1,
      alt: "image 1",
    },
    {
      src: campus2,
      alt: "image 2",
    },
    {
      src: campus3,
      alt: "image 3",
    },
    {
      src: campus4,
      alt: "image 4",
    },
    {
      src: campus5,
      alt: "image 5",
    },
  ];

  let [currentCampus, setCurrentCampus] = useState(0);

  return (
    <div className="w-full h-full flex justify-center text-lavenderBlush text-2xl">
      <div
        className="w-[1000px] h-[700px] bg-cover bg-center rounded-3xl p-8 pt-[320px] flex justify-between"
        style={{ backgroundImage: `url(${campusData[currentCampus].src})` }}
      >
        <button
          className="bg-plum p-4 text-white border border-transparent rounded-full hover:brightness-125 transition-colors h-14 opacity-80"
          onClick={() => {
            if (currentCampus > 0) {
              setCurrentCampus(currentCampus - 1);
            }
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bg-plum p-4 border border-transparent rounded-full hover:brightness-125 transition-colors h-14 opacity-80"
          onClick={() => {
            if (currentCampus < campusData.length - 1) {
              setCurrentCampus(currentCampus + 1);
            }
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CampusImages;
