import LandingPage from "./LandingPage";
import About from "./AboutPage";
import StudentPage from "./StudentPage";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:32 w-screen";
  return (
    <div className="w-screen h-screen">
      {/* page 1 */}
      <div className={`bg-plum bg-cover min-h-[84%] ${template}`}>
        <LandingPage />
      </div>
      {/* page 2 */}
      <div className={`bg-pink-50 min-h-[2000px] mb-6 ${template}`}>
        <About />
      </div>
      {/* page 3 */}
      <div className={`bg-oxfordBlue min-h-[2000px] ${template}`}>
        <StudentPage />
      </div>
    </div>
  );
}
