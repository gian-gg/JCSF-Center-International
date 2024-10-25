const PhotoCard = ({
  orientation,
  x,
  y,
  lgx,
  lgy,
  rotation,
  color,
  backgroundImage,
}) => {
  // Define the size classes based on orientation
  const sizeClasses =
    orientation === "landscape"
      ? "h-[200px] w-[300px] lg:h-[350px] lg:w-[500px] md:h-[300px] md:w-[450px]"
      : "h-[300px] w-[200px] lg:h-[500px] lg:w-[350px] md:h-[450px] md:w-[300px]";

  return (
    <div
      className={`${sizeClasses} ${x} ${y} ${rotation} lg:${lgx} lg:${lgy} bg-lavenderBlush flex justify-center pt-3`}
    >
      <div
        className={`bg-${color} h-4/5 w-[95%]`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default PhotoCard;
