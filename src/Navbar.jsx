import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import jneLogo from "./assets/JNE_Logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/clients" },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 px-6 py-0
                    bg-[#050b1e]/80 backdrop-blur-md text-white shadow-lg border border-white
                    rounded-full max-w-6xl w-[95%]">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="">
          <img
            src={jneLogo}
            alt="JNE Logo"
            className="h-18 w-auto object-contain"
          />

        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-6 
                       bg-[#050b1e]/90 backdrop-blur-md rounded-xl border border-white/10 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block py-2 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
