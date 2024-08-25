const PhotoCard = ({ orientation, x, y, lgx, lgy, rotation, color }) => {
  // Define the size classes based on orientation
  const sizeClasses =
    orientation === "landscape"
      ? "h-[200px] w-[300px] lg:h-[350px] lg:w-[500px]"
      : "h-[300px] w-[200px] lg:h-[500px] lg:w-[350px]";

  return (
    <div
      className={`${sizeClasses} ${x} ${y} ${rotation} lg:${lgx} lg:${lgy} bg-lavenderBlush flex justify-center pt-3`}
    >
      <div className={`bg-${color} h-4/5 w-[95%]`}></div>
    </div>
  );
};

export default PhotoCard;
