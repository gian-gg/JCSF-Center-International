import React, { useRef } from "react";
import Slider from "react-slick";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import campus1 from "../assets/images/campus/campus1.jpg";
import campus2 from "../assets/images/campus/campus2.jpg";
import campus3 from "../assets/images/campus/campus3.jpg";
import campus4 from "../assets/images/campus/campus4.jpg";
import campus5 from "../assets/images/campus/campus5.jpg";
import campus6 from "../assets/images/campus/campus6.jpg";
import campus7 from "../assets/images/campus/campus7.jpg";
import campus8 from "../assets/images/campus/campus8.jpg";
import campus9 from "../assets/images/campus/campus9.jpg";

function Arrows({ method, click }) {
  return (
    <button
      className="bg-plum p-2 md:p-4 text-white border border-transparent rounded-full hover:brightness-125 transition-colors opacity-80"
      onClick={click}
    >
      {method === "right" ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
}

function Image({ image }) {
  return <img className="rounded-3xl" src={image} />;
}

function CampusImages() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext(); // Access current property of sliderRef
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Access current property of sliderRef
  };

  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="slider-container w-4/5 max-w-[1280px]"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <div className="absolute z-50 w-full h-full flex justify-between items-center px-2 md:px-8">
        <Arrows method="right" click={previous} />
        <Arrows method="left" click={next} />
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Image image={campus1} />
        </div>
        <div>
          <Image image={campus2} />
        </div>
        <div>
          <Image image={campus3} />
        </div>
        <div>
          <Image image={campus4} />
        </div>
        <div>
          <Image image={campus5} />
        </div>
        <div>
          <Image image={campus6} />
        </div>
        <div>
          <Image image={campus7} />
        </div>
        <div>
          <Image image={campus8} />
        </div>
        <div>
          <Image image={campus9} />
        </div>
      </Slider>
    </div>
  );
}

export default CampusImages;
