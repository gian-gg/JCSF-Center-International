import logo from "../assets/images/logo.png";

import ServiceLinks from "../components/ServicesLinks";
import TopLink from "../components/TopLinks";

import { Link } from "react-router-dom";
import ContactButton from "../components/ContactButton";

const PageTwo = () => {
  return (
    <div className="mb-10">
      <div className="containers lg:absolute top-[600px] flex sm:flex-row flex-col gap-8 items-center mt-6 lg:mt-2">
        <TopLink className="bg-xanthous" />
        <TopLink className="bg-oxfordBlue" />
      </div>
      <div className="mt-20 lg:mt-96 text-center font-robotoCondensed flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-plum">
          JCSF CENTER INTERNATIONAL
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl">
          A Kindergarten in Phnom Penh, Cambodia.
        </h2>
        <div className="flex lg:flex-row flex-col justify-center w-[80%] gap-4 lg:gap-10 items-center mt-4">
          <img src={logo} alt="" className="w-64" />
          <p className="font-robotoSlab text-justify text-lg">
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
          <ServiceLinks />
          <ServiceLinks />
          <ServiceLinks />
        </div>
        <ContactButton className="mt-64 flex font-bold font-robotoCondensed" />
      </div>
    </div>
  );
};

export default PageTwo;
