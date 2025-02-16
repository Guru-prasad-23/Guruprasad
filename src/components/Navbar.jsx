import { useState } from "react";
// import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants/index";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50 ">
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-6">
            <div>
              <Link to={"/"} className="tracking-widest text-2xl">
                GURU PRASAD
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    {item.label === "Contact" ? (
                      <button
                        disabled={location.pathname !== "/"}
                        className={`text-sm  rounded ${
                          location.pathname !== "/"
                            ? "cursor-not-allowed opacity-50 bg-gray-400 text-gray-700"
                            : "hover:text-black"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-sm hover:text-black"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}

        <div className="rounded-lg backdrop-blur-md lg:hidden p-4">
          <div className="flex items-center justify-between">
            <div>
              <Link className="tracking-widest text-2xl text-white lg:text-black md:text-white">
                GURU PRASAD
              </Link>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5 text-white lg:text-black md:text-white" />
                ) : (
                  <FaBars className="m-2 h-6 w-5 text-white  lg:text-black md:text-white" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md text-yellow-600 border border-neutral-400 rounded-lg p-6 shadow-lg">
              {NAVIGATION_LINKS.map((item, index) => (
                 <li key={index}>
                 {item.label === "Contact" ? (
                   <button
                     disabled={location.pathname !== "/"}
                     className={`text-xl  rounded ${
                       location.pathname !== "/"
                         ? "cursor-not-allowed opacity-50 bg-gray-400 text-gray-700"
                         : "hover:text-black"
                     }`}
                   >
                     {item.label}
                   </button>
                 ) : (
                   <Link
                     to={item.to}
                     className="block w-full text-xl"
                   >
                     {item.label}
                   </Link>
                 )}
               </li>
                // <li key={index}>
                //   <Link
                //     to={item.to}
                //     className="block w-full text-xl font-semibold"
                //   >
                //     {item.label}
                //   </Link>
                // </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
