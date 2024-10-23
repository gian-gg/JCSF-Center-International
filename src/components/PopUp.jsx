import Socials from "../components/Socials";

import { MdOutlineClose } from "react-icons/md";

const ContactsPage = ({ isOpen, setIsOpen, Content, bg }) => {
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
        className="h-4/5 w-4/5 xl:h-[510px] xl:w-[910px] bg-white relative z-50 rounded-3xl"
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
          {Content && <Content />}
        </div>
        <div className="w-full h-1/6 bg-xanthous rounded-b-3xl text-4xl flex justify-evenly align-middle items-center text-tyrianPurple">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
