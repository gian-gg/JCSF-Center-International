import TableAdmission from "../components/TableAdmission";
import Button from "../components/Button";
import Card from "../components/Card";

import aboutCard1 from "../assets/images/about/about1.png";
import aboutCard2 from "../assets/images/about/about2.png";

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
        <div className="flex flex-col admissionLG:flex-row gap-4">
          <div className="text-center admissionLG:text-left">
            <div className="mt-20 text-6xl sm:text-7xl admissionLG:text-8xl font-extrabold font-introRust text-oxfordBlue">
              <p>ADMISSION</p>
              <p className="text-4xl sm:text-5xl admissionLG:text-6xl">
                & ENROLLMENT
              </p>
            </div>
            <h2 className="text-lg sm:text-2xl admissionLG:text-3xl opacity-80 font-balgin font-bold">
              JOIN US NOW <span className="font-colonna">!</span>
            </h2>
          </div>
          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center admissionLG:translate-y-[-80px] mt-12 md:mt-0">
            <Card
              color="plum"
              backgroundImage={aboutCard1}
              title="TITLE 1"
              togglePopUpPage={togglePopUpPage}
              onClick={() => {
                setPopUpContent("admission1");
                openPopUpPage();
              }}
            />
            <Card
              color="xanthous"
              backgroundImage={aboutCard2}
              title="TITLE 2"
              togglePopUpPage={togglePopUpPage}
              onClick={() => {
                setPopUpContent("admission2");
                openPopUpPage();
              }}
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-12">
          <TableAdmission
            num="01"
            step="STEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
          <TableAdmission
            num="02"
            step="STEP STEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
          <TableAdmission
            num="03"
            step="STEP STEP STEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
          <TableAdmission
            num="04"
            step="STEP STEP STEP STEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
        </div>

        {/* Buttons Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 items-center">
          <Button element="button" color="plum" label="Button 1" />
          <Button element="button" color="xanthous" label="Button 2" />
          <Button element="button" color="oxfordBlue" label="Button 3" />
        </div>
      </div>
      <div className="mt-20 text-center font-introRust flex flex-col items-center">
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
