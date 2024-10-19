import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import AdmissionPage from "./pages/AdmissionPage";
import FooterPage from "./pages/Footer";

import Header from "./components/Header";

import { Link } from "react-router-dom";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:px-32 w-full";
  return (
    <div className="overflow-hidden">
      <div className={`bg-plum ${template}`}>
        <Header />
      </div>
      {/* page 1 */}
      <div className={`bg-plum bg-cover min-h-[700px] ${template}`}>
        <LandingPage />
      </div>
      {/* page 2 */}
      <div className={`bg-lavenderBlush min-h-[1900px] ${template}`}>
        <About />
      </div>
      {/* page 3 */}
      <div className={`bg-oxfordBlue max-h-[2000px]  ${template}`}>
        <StudentPage />
      </div>
      {/* page 4 */}
      <div className={`bg-lavenderBlush min-h-[1200px] ${template}`}>
        <AdmissionPage />
      </div>
      {/* page 45*/}
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
            className="underline"
          >
            gian.gg
          </Link>
        </p>
      </div>
    </div>
  );
}
