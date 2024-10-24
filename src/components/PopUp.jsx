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
        className="h-3/5 w-4/5 lg:max-h-[510px] lg:max-w-[910px] bg-white relative z-50 rounded-3xl animate-slideInDown flex flex-col justify-between"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 md:right-8 z-50 text-4xl"
        >
          <MdOutlineClose />
        </button>

        <div className="h-3/5 pt-10 p-8">{Content && <Content />}</div>
        <div className="h-1/5 bg-xanthous rounded-b-3xl text-4xl flex justify-evenly items-center text-tyrianPurple">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
