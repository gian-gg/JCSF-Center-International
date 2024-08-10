import Header from "../components/Header";

export default function App() {
  return (
    <div className="bg-slate-400 p-2 sm:px-32 px-4 w-screen h-screen">
      <Header />
      <div className="w-full mt-20 md:mt-40 text-white">
        <div className="text-center flex flex-col gap-2"></div>
      </div>
    </div>
  );
}
