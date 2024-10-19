import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useDetectScroll from "@smakss/react-scroll-direction";
import { Element } from "react-scroll";

import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import AdmissionPage from "./pages/AdmissionPage";
import FooterPage from "./pages/Footer";
import Header from "./components/Header";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:px-32 w-full";

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

  return (
    <div className="overflow-hidden bg-plum">
      <div
        className={`bg-plum z-50 fixed pt-4 duration-300 ${template} ${
          showNavbar ? "" : "translate-y-[-90px]"
        }`}
      >
        <Header />
      </div>

      <Element name="home">
        <div className={`bg-plum bg-cover min-h-[700px] ${template}`}>
          <LandingPage />
        </div>
      </Element>

      <Element name="about">
        <div className={`bg-lavenderBlush min-h-[1900px] ${template}`}>
          <About />
        </div>
      </Element>

      <Element name="student">
        <div className={`bg-oxfordBlue max-h-[2000px] ${template}`}>
          <StudentPage />
        </div>
      </Element>

      <Element name="admission">
        <div className={`bg-lavenderBlush min-h-[1200px] ${template}`}>
          <AdmissionPage />
        </div>
      </Element>

      <div className={`bg-plum min-h-[350px] ${template}`}>
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
            className="underline text-xanthous"
          >
            gian.gg
          </Link>
        </p>
      </div>
    </div>
  );
}
