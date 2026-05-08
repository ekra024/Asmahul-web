import React from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import myPic from "/Asmahul Husan.png";
import cv from "/Asmahul Husna.pdf"
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="text-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Asmahul Husna",
                  "MERN stack Developer",
                  "Web Developer",
                  "Backend Developer",
                  "Problem Solver"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 100,
              }}
            />
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            I'm a passionate Software Engineer who loves turning ideas into
            modern, functional web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a
              href={cv}
              download
              className="btn btn-primary flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 border-none"
            >
              <FiDownload />
              Download CV
            </a>
            <a
              href="#projects"
              className="btn btn-outline flex items-center gap-2 px-6 py-3 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              See Projects
              <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:mt-0 mt-20">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <img
              src={myPic}
              alt="My Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
