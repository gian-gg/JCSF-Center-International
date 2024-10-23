import { Link } from "react-router-dom";

import Socials from "../components/Socials";

import { MdOutlineClose } from "react-icons/md";

import arrow from "../assets/images/arrow.png";

import bg from "../assets/images/bg/bg3.png";

const ContactsPage = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`w-screen h-screen relative ${isOpen ? "flex" : "hidden"} justify-center items-center`}
    >
      {/* Dark background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className="h-4/5 w-4/5 xl:h-3/5 xl:w-3/5 max-w-[910px] max-h-[510px] bg-white relative z-50 rounded-3xl"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button onClick={() => setIsOpen(false)}>
          <MdOutlineClose className="absolute right-4 top-4 md:right-8 text-4xl" />
        </button>
        <div className="w-full h-4/5  p-4 md:px-8">
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-introRust font-extrabold text-plum">
              Have Questions?
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-balgin font-bold">
              Get in Touch <span className="font-colonna">!</span>
            </h2>
          </div>

          <div className="h-full flex flex-col justify-evenly pb-20">
            <div className="text-plum font-georgiaPro text-2xl flex flex-col md:flex-row md:justify-between gap-4">
              <div className="left flex flex-col gap-4">
                <p>
                  <strong className="text-black">Mobile:</strong> (555) 123-4567
                </p>
                <p>
                  <strong className="text-black">Landline:</strong> (555)
                  987-6543
                </p>
              </div>
              <div className="right flex flex-col gap-4">
                <p>
                  <strong className="text-black">Email:</strong>{" "}
                  123456@email.com
                </p>
                <p>
                  <strong className="text-black">Address:</strong> 1234 Elm
                  Street, Springfield, IL 62701
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="font-georgiaPro">Checkout our Facebook Page!</p>
              <Link to="https://www.facebook.com/jcsfci" target="_blank">
                <img className="h-6" src={arrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-1/6 bg-xanthous rounded-b-3xl text-4xl flex justify-evenly align-middle items-center text-tyrianPurple">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
