import Socials from "../components/Socials";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Contacts from "../components/Contacts";

const Footer = () => {
  return (
    <div className="text-white mb-8 w-4/5 max-w-[1000px]">
      <div className="w-full mt-20 flex flex-col md:flex-row justify-between">
        <div className="flex lg:w-[50%] flex-col md:flex-row md:gap-12">
          <div className="md:w-[50%] lg:w-[60%] flex flex-col justify-center align-middle items-center gap-4">
            <Logo />
            <p className="px-8 text-center font-georgiaPro">
              "Where Little Minds Soar and Dreams Begin!"
            </p>
            <div className="text-4xl flex gap-8 text-tyrianPurple">
              <Socials />
            </div>
          </div>
          <div className="lg:w-[50%] mt-12 lg:mt-0 flex flex-col justify-center align-middle items-center gap-4">
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
            <Contacts colorLabel="lavenderBlush" colorText="xanthous" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
