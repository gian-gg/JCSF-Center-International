import PageOne from "./PageOne";

export default function App() {
  const template = "p-2 px-4 sm:px-20 lg:32 w-screen";
  return (
    <div className="w-screen h-screen">
      {/* page 1 */}
      <div className={`bg-imageOne bg-cover h-[90%] ${template}`}>
        <PageOne />
      </div>
      {/* page 2 */}
      <div className={`bg-pink-50 h-screen ${template}`}></div>
    </div>
  );
}
