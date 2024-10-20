import logo from "../assets/images/logo.png";

import Card from "../components/Card";
import AboutCard from "../components/AboutCard";

import { Link } from "react-router-dom";
import Button from "../components/Button";

import aboutCard1 from "../assets/images/about/about1.png";
import aboutCard2 from "../assets/images/about/about2.png";

import aboutCard3 from "../assets/images/about/aboutCard1.jpg";
import aboutCard4 from "../assets/images/about/aboutCard2.jpg";
import aboutCard5 from "../assets/images/about/aboutCard3.jpg";

const PageTwo = () => {
  return (
    <div className="mb-2 lg:mb-52 lg:mt-10 translate-y-[-100px] lg:translate-y-[-140px]">
      <div className="mt-8 containers flex sm:flex-row flex-col gap-8 items-center">
        <Card color="xanthous" backgroundImage={aboutCard1} title="TITLE 1" />
        <Card color="oxfordBlue" backgroundImage={aboutCard2} title="TITLE 2" />
      </div>
      <div className="mt-20 text-center font-introRust flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-plum">
          JCSF CENTER INTERNATIONAL
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold">
          A Kindergarten in Phnom Penh, Cambodia.
        </h2>
        <div className="flex lg:flex-row flex-col justify-center w-[80%] gap-4 lg:gap-10 items-center mt-4">
          <img src={logo} alt="" className="w-64" />
          <p className="font-georgiaPro text-justify text-xl indent-8">
            Incididunt ea commodo ea nisi pariatur nostrud fugiat officia
            incididunt nostrud est voluptate est magna pariatur. Et minim id
            dolor dolor in dolore. Nulla dolore laborum occaecat proident elit
            voluptate voluptate sunt ut. Sit tempor ad occaecat laborum veniam
            do incididunt aliqua eu officia ut laborum ad enim. Velit eiusmod
            nisi esse exercitation adipisicing enim in eu. Minim deserunt Lorem
            fugiat et consectetur commodo magna dolor incididunt elit dolor
            consectetur adipisicing.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-48 lg:gap-20 mt-20">
          <AboutCard
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard3}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
          <AboutCard
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard4}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
          <AboutCard
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard5}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
        </div>
        <Button
          element="link"
          to="/"
          color="xanthous"
          label="Facebook"
          arrow="True"
          className="mt-64 flex font-bold font-robotoCondensed"
        />
      </div>
    </div>
  );
};

export default PageTwo;
