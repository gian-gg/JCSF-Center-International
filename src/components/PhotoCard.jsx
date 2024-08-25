const PhotoCard = ({ orientation, x, y, lgx, lgy, rotation, color }) => {
  let height, width, lgHeight, lgWidth;
  if (orientation == "landscape") {
    height = "[200px]";
    width = "[300px]";
    lgHeight = "[350px]";
    lgWidth = "[500px]";
  } else {
    height = "[300px]";
    width = "[200px]";
    lgHeight = "[500px]";
    lgWidth = "[350px]";
  }
  return (
    <div

      className={`h-[200px] w-[200px] ${x} ${y} lg:h-${lgHeight} lg:w-${lgWidth} ${rotation} lg:${lgx} lg:${lgy} bg-lavenderBlush flex justify-center pt-3`}

    >
      <div className={`bg-${color} h-4/5 w-[95%]`}></div>
    </div>
  );
};

export default PhotoCard;
