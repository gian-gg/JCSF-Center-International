import TableAdmission from "../components/TableAdmission";
import Button from "../components/Button";
import Card from "../components/Card";

const AdmissionPage = () => {
  return (
    <div className="">
      {/* Main Content */}
      <div className="flex-1">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="text-center lg:text-left">
            <div className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust">
              <p>ADMISSION</p>
              <p>ENROLLMENT</p>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold">
              JOIN US NOW <span className="font-colonna">!</span>
            </h2>
          </div>
          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center lg:translate-y-[-80px] mt-12 md:mt-0">
            <Card color="plum" />
            <Card color="xanthous" />
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
            step="STEPSTEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
          <TableAdmission
            num="03"
            step="STEPSTEPSTEP"
            text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
          />
          <TableAdmission
            num="04"
            step="STEPSTEPSTEPSTEP"
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
    </div>
  );
};

export default AdmissionPage;
