import { Link } from "react-router-dom";

import TableAdmission from "../components/TableAdmission";

const ImageCards = ({ to, image }) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="hover:scale-105 hover:-translate-y-8 transition duration-700 ease-in-out hover:brightness-125"
    >
      <img
        src={image}
        alt=""
        className="w-80 rounded-xl"
        data-aos="fade-up"
        data-aos-once="true"
      />
    </Link>
  );
};

const AdmissionPage = ({ togglePopUpPage, setPopUpContent }) => {
  const openPopUpPage = () => {
    togglePopUpPage(); // Call the prop function
    setShowNavBar(false); // Close the navbar
  };
  return (
    <div className="mb-12 flex flex-col justify-center items-center">
      {/* Main Content */}
      <div className="flex-1">
        {/* Title and Subtitle */}
        <div className="flex flex-col admissionLG:flex-row gap-4 xl:gap-12">
          <div
            className="text-center admissionLG:text-left"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <div className="mt-20 text-6xl sm:text-7xl admissionLG:text-8xl font-extrabold font-introRust text-oxfordBlue">
              <p>ADMISSION</p>
              <p className="text-4xl sm:text-5xl admissionLG:text-6xl">
                & ENROLLMENT
              </p>
            </div>
            <h2 className="text-lg sm:text-2xl admissionLG:text-3xl opacity-80 font-balgin font-bold animate-pulse">
              JOIN US NOW <span className="font-colonna">!</span>
            </h2>
          </div>
          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center admissionLG:translate-y-[-80px] mt-12 md:mt-0">
            <ImageCards
              to="https://www.facebook.com/share/p/yi7NS6NRTTE4oKRM/"
              image="./images/admission/image1.jpg"
            />
            <ImageCards
              to="https://www.facebook.com/share/p/J5gADLUP8fTvF84g/"
              image="./images/admission/image2.jpg"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-12 flex flex-col justify-center items-center">
          <TableAdmission
            num="01"
            step="Inquiry Submission"
            text="Parents interested in enrolling their child can submit an inquiry by contacting the admissions office directly for initial information."
          />
          <TableAdmission
            delay="200"
            num="02"
            step="School Tour"
            text="Schedule a visit to the school for a guided tour where prospective families can meet the staff, explore the facilities, and gain insights into the curriculum and ethos."
          />
          <TableAdmission
            delay="400"
            num="03"
            step="Application Form Completion"
            text="Fill out the admissions application form, providing necessary details about the child, previous educational experience, and family information."
          />
          <TableAdmission
            delay="600"
            num="04"
            step="Document Submission"
            text="Submit required documents, including the child's birth certificate, health records, and any previous school reports, to the admissions office."
          />
          <TableAdmission
            delay="600"
            num="05"
            step="Parent Interview"
            text="Attend a meeting with the admissions team to discuss the child’s needs, educational philosophy, and any questions about the school."
          />
          <TableAdmission
            delay="600"
            num="06"
            step="Assessment Session"
            text="If applicable, schedule an assessment or play session for the child to ensure a good fit with the school's environment and curriculum."
          />
          <TableAdmission
            delay="600"
            num="07"
            step="Admission Decision"
            text="Upon completion of the previous steps, await notification regarding the child's admission status, typically communicated via email or phone."
          />
          <TableAdmission
            delay="600"
            num="08"
            step="Enrollment Confirmation"
            text="Once accepted, complete the enrollment form and provide a non-refundable deposit to secure a place for your child."
          />
        </div>

        {/* Buttons Section */}
        <div
          className="mt-12 flex flex-col md:flex-row justify-center gap-8 items-center"
          data-aos="zoom-in"
          data-aos-once="true"
        ></div>
      </div>
      <div
        className="mt-20 text-center font-introRust flex flex-col items-center animate-pulse"
        data-aos="flip-right"
        data-aos-once="true"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-plum">
          JCSF CENTER INTERNATIONAL
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold text-oxfordBlue">
          A Kindergarten in Phnom Penh, Cambodia.
        </h2>
      </div>
    </div>
  );
};

export default AdmissionPage;
