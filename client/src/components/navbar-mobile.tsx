import React from "react";
import { FiMail } from "react-icons/fi";
const NavbarMobile = () => {
  return (
    <>
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6 ">
        <h1 className="text-3xl font-semibold">[D.E]</h1>

        <ul className="flex flex-wrap gap-4 md:flex md:space-x-6 text-white font-medium text-sm">
          {["home", "about", "background", "projects", "certifications"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="relative transition-colors duration-300 hover:text-[#F85F00] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F85F00] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>

        <button className="group bg-[#F85F00] text-white text-md px-5 py-3 flex items-center gap-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
          <FiMail className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
          Contact Me
        </button>
      </nav>
    </>
  );
};

export default NavbarMobile;
