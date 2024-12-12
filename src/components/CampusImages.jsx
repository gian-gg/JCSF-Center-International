import React, { useRef } from "react";
import Slider from "react-slick";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

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
  return <img className="rounded-3xl" src={image} alt="campus image" />;
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
          <Image image="/images/campus/campus1.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus2.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus3.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus4.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus5.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus6.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus7.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus8.jpg" />
        </div>
        <div>
          <Image image="/images/campus/campus9.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default CampusImages;
