import StudentCarousel from "../components/StudentCarousel";

const StudentPage = () => {
  return (
    <div className="translate-y-[-50px] lg:translate-y-[-300px] flex flex-col justify-center items-center align-middle text-lavenderBlush">
      <StudentCarousel />
      <h1 className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust">
        STUDENT LIFE
      </h1>
      <p className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold">
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default StudentPage;
