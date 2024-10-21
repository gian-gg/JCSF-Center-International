const ContactsPage = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`relative ${isOpen ? "block" : "hidden"}`}>
      {/* Dark background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="h-40 w-40 bg-white relative z-50">
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default ContactsPage;
