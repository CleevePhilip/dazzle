import React, { useState } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-semibold">[D.E]</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["home", "about", "background", "projects", "certifications"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item)}
                  className="relative transition-colors duration-300 hover:text-orange-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:flex group bg-orange-500 text-white text-md px-5 py-3 items-center gap-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
          <FiMail className="text-lg transform transition-transform duration-300 group-hover:translate-x-1" />
          Contact Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 px-6 py-4 space-y-4">
          {["home", "about", "background", "projects", "certifications"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="block w-full text-left hover:text-orange-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
          <button className="w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition">
            <FiMail className="text-lg" />
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
