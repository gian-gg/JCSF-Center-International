import campusIMG from "../assets/images/campus/campus1.jpg";

const StudentPage = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={campusIMG}
        alt=""
        className="mt-6 rounded-3xl block lg:absolute w-[90%] top-[2400px] items-center h-auto"
      />
    </div>
  );
};

export default StudentPage;
