// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 text-gray-400">
      <div className="container mx-auto px-4 py-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Asmahul Husna
            </h3>
            <p className="text-sm text-gray-500">
              Frontend Developer · MERN Stack
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/ekra024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition "
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/asmahul-husna-1503a4234/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              className="hover:text-indigo-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Asmahul Husna. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
