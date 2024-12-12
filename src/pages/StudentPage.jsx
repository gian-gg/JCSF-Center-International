import CampusImages from "../components/CampusImages";
import PhotoCard from "../components/PhotoCard";

const StudentPage = () => {
  return (
    <div className="w-full h-full translate-y-[-50px] lg:translate-y-[-300px] flex flex-col justify-center items-center align-middle text-lavenderBlush">
      <CampusImages />
      <h1
        className="mt-20 text-5xl sm:text-7xl lg:text-8xl font-extrabold font-introRust"
        data-aos="fade-right"
        data-aos-once="true"
      >
        STUDENT LIFE
      </h1>
      <h2
        className="text-lg sm:text-2xl lg:text-3xl opacity-80 font-balgin font-bold  animate-pulse"
        data-aos="fade-in"
        data-aos-once="true"
      >
        Checkout our Campus <span className="font-colonna">!</span>
      </h2>
      {/* PHOTOCARDS */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex mt-12 -translate-x-12">
          <div>
            <img
              src="./images/chalkOverlay/chalk4.png"
              className="h-28 md:h-32 lg:h-48 absolute z-20 right-96 top-24 md:right-[600px] md:top-16 lg:right-[680px] lg:top-10 -rotate-[16deg]"
              data-aos="fade-in"
              data-aos-once="true"
            />
            <PhotoCard
              orientation="landscape"
              x="translate-x-44"
              y="translate-y-40"
              lgx="translate-y-28"
              lgy="translate-x-16"
              rotation="-rotate-12"
              color="xanthous"
              backgroundImage="./images/students/image1.jpg"
            />
          </div>
          <div>
            <img
              src="./images/chalkOverlay/chalk3.png"
              className="h-28 md:h-32 lg:h-48 absolute right-28 -top-4 md:right-44 rotate-12 z-20"
              data-aos="fade-in"
              data-aos-once="true"
            />

            <PhotoCard
              orientation="landscape"
              color="oxfordBlue"
              backgroundImage="./images/students/image2.jpg"
            />
          </div>
          <div>
            <img
              src="./images/chalkOverlay/chalk5.png"
              className="h-28 md:h-32 lg:h-48 absolute right-48 top-40 z-20"
              data-aos="fade-in"
              data-aos-once="true"
            />
            <PhotoCard
              x="-translate-x-40"
              y="translate-y-40"
              lgx="-translate-x-16"
              lgy="translate-y-20"
              rotation="rotate-[20deg]"
              color="plum"
              backgroundImage="./images/students/image3.jpg"
            />
          </div>
        </div>
        <div className="flex mt-48 lg:mt-0 translate-x-1">
          <div>
            <img
              src="./images/chalkOverlay/chalk6.png"
              className="h-28 md:h-32 lg:h-48 absolute right-48 md:right-96 lg:right-96 -top-56 rotate-12 z-20"
              data-aos="fade-in"
              data-aos-once="true"
            />
            <PhotoCard
              x="translate-x-12"
              y="-translate-y-40"
              lgx="-translate-x-20"
              lgy="-translate-y-20"
              rotation="-rotate-2"
              color="plum"
              backgroundImage="./images/students/image4.jpg"
            />
          </div>

          <div>
            <img
              src="./images/chalkOverlay/chalk7.png"
              className="h-16 md:h-24 lg:h-36 absolute left-36 top-24 md:top-56 lg:left-56 lg:top-56 -rotate-12 z-20"
              data-aos="fade-in"
              data-aos-once="true"
            />
            <PhotoCard
              orientation="landscape"
              x="-translate-x-12"
              lgy="-translate-y-20"
              rotation="rotate-2"
              color="xanthous"
              backgroundImage="./images/students/image5.jpg"
            />
          </div>
        </div>
        <div className="translate-x-1">
          <img
            src="./images/chalkOverlay/chalk8.png"
            className="h-28 md:h-32 lg:h-48 absolute -right-16 lg:-right-24 -top-48 rotate-[40deg] z-20"
            data-aos="fade-in"
            data-aos-once="true"
          />
          <PhotoCard
            orientation="landscape"
            y="-translate-y-40"
            lgx="-translate-x-20"
            lgy="-translate-y-80"
            rotation="-rotate-12"
            color="oxfordBlue"
            backgroundImage="./images/students/image6.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
