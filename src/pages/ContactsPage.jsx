import Contacts from "../components/Contacts";

const Contact = ({ delay, label, text }) => {
  return (
    <p data-aos="fade-right" data-aos-delay={delay}>
      <strong className="text-black">{label}:</strong> {text}
    </p>
  );
};

const ContactsPage = () => {
  return (
    <div className="w-full h-full">
      <h1
        className="text-4xl lg:text-7xl font-introRust font-extrabold text-plum"
        data-aos="flip-right"
        data-aos-delay="600"
      >
        Have Questions?
      </h1>
      <h2 className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold animate-pulse">
        Get in Touch <span className="font-colonna">!</span>
      </h2>

      <div className="text-plum font-georgiaPro md:text-2xl pt-8 flex flex-col md:flex-row justify-between gap-4">
        <div className="left flex flex-col gap-4 md:w-1/2">
          <Contacts colorLabel="black" colorText="plum" />
        </div>
        <div className="right flex flex-col gap-4 md:w-1/2">
          <Contact
            delay="1400"
            label="School Address"
            text="#104 Beo.
            st. 13BT, Phum Sansamkosal, Sangkat Boeng Tumpon, Khan Mean Chey,
            Phnom Phenh, Cambodia"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
