import { Link } from "react-router-dom";

import arrow from "../assets/images/arrow.png";

const ContactsPage = () => {
  return (
    <div className="w-full h-full">
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
              <strong className="text-black">Landline:</strong> (555) 987-6543
            </p>
          </div>
          <div className="right flex flex-col gap-4">
            <p>
              <strong className="text-black">Email:</strong> 123456@email.com
            </p>
            <p>
              <strong className="text-black">Address:</strong> 1234 Elm Street,
              Springfield, IL 62701
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
  );
};

export default ContactsPage;
