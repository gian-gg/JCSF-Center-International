import TableAdmission from "../components/TableAdmission";

const AdmissionPage = () => {
  return (
    <div className="flex w-full">
      <div className="left w-full">
        <h1 className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust">
          ADMISSION & ENROLLMENT
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold">
          JOIN US NOW <span className="font-colonna">!</span>
        </h2>
        <div className="m-12">
          <img
            src="https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/452546071_122117195252361946_5725511023172517067_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHNWlMbANQmMP0iQsl8wwJB1FhVWXKRFy3UWFVZcpEXLU7PfObqHW-byu4EgStiPH81CuX3-xR19NvzCf7yHsb5&_nc_ohc=bBKi_q0oHSIQ7kNvgFfLCvz&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=AdcSLv7bjXT2PNBaVOS48dj&oh=00_AYDmqCpgfcGZHiFI2yKtZ3ARGY9jOLjvVIbeIGUU0CGrFQ&oe=66F1E45A"
            alt=""
            className="w-[600px] rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <TableAdmission
          num="01"
          step="STEP"
          text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
        />
        <hr />
        <TableAdmission
          num="02"
          step="STEP"
          text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
        />
        <hr />
        <TableAdmission
          num="03"
          step="STEP"
          text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
        />
        <hr />
        <TableAdmission
          num="04"
          step="STEP"
          text="nulla dolor veniam ut fugiat id labore magna in excepteur consequat proident cillum quis ea voluptate labore aliqua dolor ut"
        />
        <hr />
      </div>
    </div>
  );
};

export default AdmissionPage;
