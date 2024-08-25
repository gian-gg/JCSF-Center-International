import CampusImages from "../components/CampusImages";
import PhotoCard from "../components/PhotoCard";

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
          />
          <PhotoCard orientation="landscape" color="oxfordBlue" />
          <PhotoCard
            x="-translate-x-40"
            y="translate-y-40"
            lgx="-translate-x-16"
            lgy="translate-y-20"
            rotation="rotate-[20deg]"
            color="plum"
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
          />
          <PhotoCard
            orientation="landscape"
            x="-translate-x-12"
            lgy="-translate-y-20"
            rotation="rotate-2"
            color="xanthous"
          />
        </div>
        <PhotoCard
          orientation="landscape"
          y="-translate-y-60"
          lgx="-translate-x-20"
          lgy="-translate-y-80"
          rotation="-rotate-12"
          color="oxfordBlue"
        />
      </div>
    </div>
  );
};

export default StudentPage;
