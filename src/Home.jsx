import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutPage";
import StudentPage from "./pages/StudentPage";
import AdmissionPage from "./pages/AdmissionPage";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:32 w-screen";
  return (
    <div className="">
      {/* page 1 */}
      <div className={`bg-plum bg-cover min-h-[700px] ${template}`}>
        <LandingPage />
      </div>
      {/* page 2 */}
      <div className={`bg-lavenderBlush min-h-[2000px] ${template}`}>
        <About />
      </div>
      {/* page 3 */}
      <div className={`bg-oxfordBlue max-h-[2000px] ${template}`}>
        <StudentPage />
      </div>
      {/* page 4 */}
      <div className={`bg-lavenderBlush min-h-[2000px] ${template}`}>
        <AdmissionPage />
      </div>
    </div>
  );
}
