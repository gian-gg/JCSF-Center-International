import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useDetectScroll from "@smakss/react-scroll-direction";
import { Element } from "react-scroll";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import AdmissionPage from "./pages/AdmissionPage";
import FooterPage from "./pages/Footer";
import ContactsPage from "./pages/ContactsPage";

import PopUp from "./components/PopUp";

import About1 from "./pages/aboutPages/AboutPage1";
import About2 from "./pages/aboutPages/AboutPage2";
import Admission1 from "./pages/admissionPages/AdmissionPage1";
import Admission2 from "./pages/admissionPages/AdmissionPage2";

import Header from "./pages/Header";

import bg1 from "./assets/images/bg/bg1.png";
import bg2 from "./assets/images/bg/bg2.png";
import bg3 from "./assets/images/bg/bg3.png";

import cursor from "./assets/images/cursor.png";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:px-32";

  const scrollDirection = useDetectScroll();
  const [showNavbar, setShowNavbar] = useState(true);
  let scrollDirect = scrollDirection.scrollDir;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollDirect === "up" || scrollDirect === "still") {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }, 300); // delay in ms

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollDirect]);

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const togglePopUpPage = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const getPopUpContent = () => {
    if (popUpContent === "contacts") {
      return ContactsPage;
    } else if (popUpContent === "about1") {
      return About1;
    } else if (popUpContent === "about2") {
      return About2;
    } else if (popUpContent === "admission1") {
      return Admission1;
    } else if (popUpContent === "admission2") {
      return Admission2;
    }
    return null; // return null if no condition matches
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className={`bg-plum z-50 fixed pt-4 duration-300 w-full ${template} ${
          showNavbar ? "" : "translate-y-[-90px]"
        }`}
      >
        <Header
          togglePopUpPage={togglePopUpPage}
          setPopUpContent={setPopUpContent}
        />
      </div>

      <div
        className={`${isPopUpOpen ? "flex" : "hidden"} w-full h-screen fixed z-50 justify-center items-center`}
      >
        <PopUp
          isOpen={isPopUpOpen}
          setIsOpen={togglePopUpPage}
          Content={getPopUpContent()}
          bg={bg3}
        />
      </div>

      <Element name="home">
        <div
          className={`bg-plum bg-cover min-h-[800px] ${template}`}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LandingPage />
        </div>
      </Element>

      <Element name="about">
        <div className={`bg-lavenderBlush min-h-[1900px] ${template}`}>
          <AboutPage
            togglePopUpPage={togglePopUpPage}
            setPopUpContent={setPopUpContent}
          />
        </div>
      </Element>

      <Element name="student">
        <div
          className={`bg-oxfordBlue max-h-[2000px] ${template}`}
          style={{
            backgroundImage: `url(${bg2})`,
          }}
        >
          <StudentPage />
        </div>
      </Element>

      <Element name="admission">
        <div className={`bg-lavenderBlush min-h-[1200px] ${template}`}>
          <AdmissionPage
            togglePopUpPage={togglePopUpPage}
            setPopUpContent={setPopUpContent}
          />
        </div>
      </Element>

      <div
        className={`bg-plum min-h-[350px] flex justify-center ${template}`}
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
        }}
      >
        <FooterPage />
      </div>

      <div className="bg-plum font-robotoMono w-full text-white font-bold text-[8px] md:text-sm flex flex-col justify-center align-middle items-center pb-2">
        <hr className="border-lavenderBlush opacity-40 h-2 w-4/5" />
        <p>
          © 2024, JCSF Center International | All Rights Reserved | Designed
          by:{" "}
          <Link
            to="https://github.com/gian-gg"
            target="_blank"
            className="underline text-xanthous hover:opacity-60 transition-all duration-500"
          >
            gian.gg
          </Link>
        </p>
      </div>
    </div>
  );
}
