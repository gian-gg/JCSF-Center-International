const AboutCard = ({
  url,
  color,
  className,
  label,
  text,
  backgroundImage,
  delay,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
      <div className="h-96 w-80">
        <div
          className={`bg-${color} h-full w-full rounded-3xl ${className}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-introRust text-2xl">{label}</h1>
          <p className="font-georgiaPro text-justify indent-8">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
