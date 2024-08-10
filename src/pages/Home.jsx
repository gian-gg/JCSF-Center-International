import Header from "../components/Header";

export default function App() {
  return (
    <div className="bg-slate-400 p-2 px-4 sm:px-20 lg:32 w-screen h-screen">
      <Header />
      <div className="w-full mt-20 md:mt-40 text-white">
        <div className="text-center flex flex-col gap-2"></div>
      </div>
    </div>
  );
}
