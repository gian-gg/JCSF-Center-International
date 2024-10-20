import CampusImages from "../components/CampusImages";
import PhotoCard from "../components/PhotoCard";

import image1 from "../assets/images/students/image1.jpg";
import image2 from "../assets/images/students/image2.jpg";
import image3 from "../assets/images/students/image3.jpg";
import image4 from "../assets/images/students/image4.jpg";
import image5 from "../assets/images/students/image5.jpg";
import image6 from "../assets/images/students/image6.jpg";

const StudentPage = () => {
  return (
    <div className="translate-y-[-50px] lg:translate-y-[-300px] flex flex-col justify-center items-center align-middle text-lavenderBlush">
      <CampusImages />
      <h1 className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust">
        STUDENT LIFE
      </h1>
      <h2 className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold">
        Checkout our Campus <span className="font-colonna">!</span>
      </h2>
      {/* PHOTOCARDS */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex mt-12 -translate-x-12">
          <PhotoCard
            orientation="landscape"
            x="translate-x-60"
            y="translate-y-28"
            lgx="translate-y-28"
            lgy="translate-x-16"
            rotation="-rotate-12"
            color="xanthous"
            backgroundImage={image1}
          />
          <PhotoCard
            orientation="landscape"
            color="oxfordBlue"
            backgroundImage={image2}
          />
          <PhotoCard
            x="-translate-x-40"
            y="translate-y-40"
            lgx="-translate-x-16"
            lgy="translate-y-20"
            rotation="rotate-[20deg]"
            color="plum"
            backgroundImage={image3}
          />
        </div>
        <div className="flex mt-48 lg:mt-0">
          <PhotoCard
            x="translate-x-12"
            y="-translate-y-40"
            lgx="-translate-x-20"
            lgy="-translate-y-20"
            rotation="-rotate-2"
            color="plum"
            backgroundImage={image4}
          />
          <PhotoCard
            orientation="landscape"
            x="-translate-x-12"
            lgy="-translate-y-20"
            rotation="rotate-2"
            color="xanthous"
            backgroundImage={image5}
          />
        </div>
        <PhotoCard
          orientation="landscape"
          y="-translate-y-60"
          lgx="-translate-x-20"
          lgy="-translate-y-80"
          rotation="-rotate-12"
          color="oxfordBlue"
          backgroundImage={image6}
        />
      </div>
    </div>
  );
};

export default StudentPage;
