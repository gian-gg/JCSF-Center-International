import Card from "../components/Card";

import Button from "../components/Button";

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
    <div
      className="flex justify-center align-middle items-center"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once="true"
    >
      <div className="h-96 w-4/5 lg:w-80">
        <div
          className={`bg-${color} h-full w-full rounded-3xl ${className}`}
          style={{
            backgroundImage: `url("${backgroundImage}")`,
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

const AboutPage = ({ togglePopUpPage, setPopUpContent }) => {
  const openPopUpPage = () => {
    togglePopUpPage(); // Call the prop function
    setShowNavBar(false); // Close the navbar
  };
  return (
    <div className="flex flex-col justify-center items-center mb-2 lg:mb-52 lg:mt-10 translate-y-[-100px] lg:translate-y-[-140px]">
      <div className="w-full  lg:-translate-x-40 xl:-translate-x-80">
        <div className="flex flex-col items-center justify-center mt-8 sm:flex-row gap-8">
          <Card
            color="xanthous"
            arrow={false}
            backgroundImage="/images/about/about1.png"
            title="Curious Minds"
            togglePopUpPage={togglePopUpPage}
            onClick={() => {
              setPopUpContent("about1");
              openPopUpPage();
            }}
          />
          <Card
            color="oxfordBlue"
            arrow={false}
            backgroundImage="/images/about/about2.png"
            title="Joyful Explorers"
            togglePopUpPage={togglePopUpPage}
            onClick={() => {
              setPopUpContent("about2");
              openPopUpPage();
            }}
          />
        </div>
      </div>
      <div className="mt-20 text-center font-introRust flex flex-col items-center ">
        <h1
          className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-plum animate-pulse"
          data-aos="flip-right"
          data-aos-once="true"
        >
          JCSF CENTER INTERNATIONAL
        </h1>
        <h2
          className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold animate-pulse"
          data-aos="fade-in"
          data-aos-once="true"
        >
          A Kindergarten in Phnom Penh, Cambodia.
        </h2>
        <div className="flex lg:flex-row flex-col justify-center w-[80%] max-w-[1000px] gap-4 lg:gap-10 items-center mt-4">
          <img src="/logo.png" alt="JCFSCI Logo" className="w-64 md:w-80" />
          <p className="font-georgiaPro text-justify text-xl indent-8">
            JCSF Center International Kindergarten School in Phnom Penh,
            Cambodia, is a vibrant and nurturing learning environment designed
            to inspire young children aged 2-6 years. With a focus on holistic
            development, the school offers a play-based curriculum that
            encourages creativity, critical thinking, and social skills.
            Experienced and caring teachers guide students through engaging
            activities that promote both academic and emotional growth. The
            school features modern facilities, interactive learning resources,
            and a safe outdoor play area, ensuring a balanced learning
            experience. At JCSF Center, we believe in fostering a love for
            learning, where each child’s individuality is celebrated and their
            potential is unlocked in a supportive community.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-48 lg:gap-20 mt-20">
          <AboutCard
            delay="100"
            color="xanthous"
            label="Holistic Curriculum"
            backgroundImage="/images/about/aboutCard1.jpg"
            text="A well-rounded program that integrates academics, arts, and physical education, fostering all aspects of child development."
          />
          <AboutCard
            delay="200"
            color="xanthous"
            label="Innovative Learning Environments"
            backgroundImage="/images/about/aboutCard2.jpg"
            text="Classrooms designed to inspire creativity, equipped with interactive tools and resources to enhance learning experiences."
          />
          <AboutCard
            delay="300"
            color="xanthous"
            label="Experienced Educators"
            backgroundImage="/images/about/aboutCard3.jpg"
            text="A team of qualified and passionate teachers committed to providing personalized attention and support to every child."
          />
        </div>
        <div data-aos="zoom-in" data-aos-once="true">
          <Button
            element="link"
            to="https://www.facebook.com/jcsfci"
            color="xanthous"
            label="Facebook"
            arrow="True"
            className="mt-64 flex font-bold font-robotoCondensed"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
