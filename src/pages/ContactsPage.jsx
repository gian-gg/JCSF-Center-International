import { MdOutlineClose } from "react-icons/md";

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

      <div className="h-4/5 w-4/5 xl:h-3/5 xl:w-3/5 bg-white relative z-50 rounded-3xl p-4">
        <button onClick={() => setIsOpen(false)}>
          <MdOutlineClose className="absolute right-8 text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default ContactsPage;
