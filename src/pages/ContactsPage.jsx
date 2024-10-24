import { Link } from "react-router-dom";

import arrow from "../assets/images/arrow.png";

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

      <div className="text-plum font-georgiaPro md:text-2xl pt-8 flex flex-col lg:flex-row justify-between gap-4">
        <div className="left flex flex-col gap-4">
          <p data-aos="fade-right" data-aos-delay="800">
            <strong className="text-black">Mobile:</strong> (555) 123-4567
          </p>
          <p data-aos="fade-right" data-aos-delay="1000">
            <strong className="text-black">Landline:</strong> (555) 987-6543
          </p>
        </div>
        <div className="right flex flex-col gap-4">
          <p data-aos="fade-right" data-aos-delay="1200">
            <strong className="text-black">Email:</strong> 123456@email.com
          </p>
          <p data-aos="fade-right" data-aos-delay="1400">
            <strong className="text-black">Address:</strong> 1234 Elm Street,
            Springfield, IL 62701
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
