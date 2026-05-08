// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // if using React Router
import { FiMenu, FiX } from 'react-icons/fi';


const navItems = [
  {path: "#hero" , label: "Home" },
  {path:"#links", label:"Links"},
  { path: "#about", label: "About Me" },
  { path: "#skills", label: "Skills" },
  { path: "#education", label: "Education" },
  { path: "#portfolio", label: "Projects" },
  { path: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 mx-auto w-full text-gray-100 shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
             Asmahul Husna 
            </Link>
          </div>

          {/* Desktop Menu */}
          
          <div className="hidden md:flex space-x-8">
            {
            navItems.map((item) => <li className='list-none font-semibold transition-colors hover:text-indigo-400' key={item.path}>
              <a href={item.path} >{item.label} </a>
            </li> )
          }
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-100 px-4 pt-2 pb-4 space-y-2">
          {
            navItems.map((item) => <li className='list-none font-semibold transition-colors hover:text-indigo-400' key={item.path}>
              <a href={item.path} >{item.label} </a>
            </li> )
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
