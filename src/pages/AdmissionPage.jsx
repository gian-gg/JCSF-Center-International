import TableAdmission from "../components/TableAdmission";
import Button from "../components/Button";
import Card from "../components/Card";

const AdmissionPage = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex">
          <div className="">
            <h1 className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust text-center lg:text-left">
              ADMISSION & ENROLLMENT
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold text-center lg:text-left">
              JOIN US NOW <span className="font-colonna">!</span>
            </h2>
          </div>
          <div className="flex gap-8 justify-around items-center">
            <Card height="48" width="48" color="plum" />
            <Card height="48" width="48" color="xanthous" />
          </div>
        </div>
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
