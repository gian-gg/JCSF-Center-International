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

import Header from "./pages/Header";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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
          bg="/images/bg/bg3.png"
        />
      </div>

      <Element name="home">
        <div
          className={`bg-plum bg-cover min-h-[800px] ${template}`}
          style={{
            backgroundImage: `url("/images/bg/bg1.png")`,
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
          className={`bg-oxfordBlue min-h-[1000px] ${template}`}
          style={{
            backgroundImage: `url("/images/bg/bg2.png")`,
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
          backgroundImage: `url("/images/bg/bg1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FooterPage />
      </div>

      <div className="bg-plum font-robotoMono w-full text-white font-bold text-[8px] md:text-sm flex flex-col justify-center align-middle items-center pb-2 px-2 text-center">
        <hr className="border-lavenderBlush opacity-40 h-2 w-4/5 " />
        <p>
          © 2024, JCSF Center International | All Rights Reserved | Designed
          and Built by:{" "}
          <Link
            to="https://github.com/gian-gg"
            target="_blank"
            className="underline text-xanthous hover:opacity-60 transition-all duration-500 animate-pulse"
          >
            gian.gg
          </Link>
        </p>
      </div>
    </div>
  );
}
