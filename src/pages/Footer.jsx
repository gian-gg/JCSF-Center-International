import Socials from "../components/Socials";

import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Footer = () => {
  return (
    <div className="text-white mb-8">
      <div className="w-full mt-20 flex flex-col md:flex-row justify-between">
        <div className="flex lg:w-[50%] flex-col md:flex-row md:gap-12">
          <div className="md:w-[50%] lg:w-[60%] flex flex-col justify-center align-middle items-center gap-4">
            <Logo />
            <p className="px-8 text-center font-georgiaPro">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-4xl flex gap-8 text-tyrianPurple">
              <Socials />
            </div>
          </div>
          <div className="lg:w-[40%] mt-12 lg:mt-0 flex flex-col justify-center align-middle items-center gap-4">
            <NavBar
              isBordered={false}
              className="p-2 flex flex-col gap-4 font-introRust text-center md:text-left"
            />
          </div>
        </div>

        <div className="md:w-[30%] mt-12 lg:mt-0 flex flex-col gap-4 align-middle items-center ">
          <h1 className="font-introRust text-2xl">Contact Us!</h1>
          <hr className="border-lavenderBlush opacity-40 h-2 w-full" />
          <div className="text-xanthous font-georgiaPro">
            <p data-aos="fade-left" data-aos-once="true">
              <strong className="text-lavenderBlush">Mobile:</strong> (555)
              123-4567
            </p>
            <p data-aos="fade-left" data-aos-once="true" data-aos-delay="200">
              <strong className="text-lavenderBlush">Landline:</strong> (555)
              987-6543
            </p>
            <p
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="400"
              data-aos-offset="50"
            >
              <strong className="text-lavenderBlush">Email:</strong>{" "}
              123456@email.com
            </p>
            <p
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="600"
              data-aos-offset="50"
            >
              <strong className="text-lavenderBlush">Address:</strong> 1234 Elm
              Street, Springfield, IL 62701
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
