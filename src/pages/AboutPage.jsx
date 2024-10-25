import logo from "../assets/images/logo.png";

import Card from "../components/Card";
import AboutCard from "../components/AboutCard";

import Button from "../components/Button";

import aboutCard1 from "../assets/images/about/about1.png";
import aboutCard2 from "../assets/images/about/about2.png";

import aboutCard3 from "../assets/images/about/aboutCard1.jpg";
import aboutCard4 from "../assets/images/about/aboutCard2.jpg";
import aboutCard5 from "../assets/images/about/aboutCard3.jpg";

const AboutPage = ({ togglePopUpPage, setPopUpContent }) => {
  const openPopUpPage = () => {
    togglePopUpPage(); // Call the prop function
    setShowNavBar(false); // Close the navbar
  };
  return (
    <div className="flex flex-col justify-center items-center mb-2 lg:mb-52 lg:mt-10 translate-y-[-100px] lg:translate-y-[-140px]">
      <div className="w-full  lg:-translate-x-40 xl:-translate-x-80">
        <div className="flex flex-col items-center justify-center mt-8 sm:flex-row gap-8">
          <Card
            color="xanthous"
            backgroundImage={aboutCard1}
            title="TITLE 1"
            togglePopUpPage={togglePopUpPage}
            onClick={() => {
              setPopUpContent("about1");
              openPopUpPage();
            }}
          />
          <Card
            color="oxfordBlue"
            backgroundImage={aboutCard2}
            title="TITLE 2"
            togglePopUpPage={togglePopUpPage}
            onClick={() => {
              setPopUpContent("about2");
              openPopUpPage();
            }}
          />
        </div>
      </div>
      <div className="mt-20 text-center font-introRust flex flex-col items-center">
        <h1
          className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-plum"
          data-aos="fade-right"
          data-aos-once="true"
        >
          JCSF CENTER INTERNATIONAL
        </h1>
        <h2
          className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold animate-pulse"
          data-aos="fade-in"
          data-aos-once="true"
        >
          A Kindergarten in Phnom Penh, Cambodia.
        </h2>
        <div className="flex lg:flex-row flex-col justify-center w-[80%] max-w-[1000px] gap-4 lg:gap-10 items-center mt-4">
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
            delay="100"
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard3}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
          <AboutCard
            delay="200"
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard4}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
          <AboutCard
            delay="300"
            color="xanthous"
            label="LOREM, IPSUM DOLOR."
            backgroundImage={aboutCard5}
            text="Ullamco occaecat sit est amet duis cupidatat pariatur enim aliquip ipsum ipsum. Exercitation adipisicing cillum dolore voluptate. Cillum occaecat duis sunt occaecat eu laborum duis pariatur."
          />
        </div>
        <div data-aos="zoom-in" data-aos-once="true">
          <Button
            element="link"
            to="https://www.facebook.com/jcsfci"
            color="xanthous"
            label="Facebook"
            arrow="True"
            className="mt-64 flex font-bold font-robotoCondensed"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
