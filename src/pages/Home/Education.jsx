import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Barishal University",
    year: "2021 – 2026",
    details:
      "Focused on software engineering, data structures, and web development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Muktijudda College",
    year: "2017 – 2018",
    details: "Major: Science | GPA: 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Your School Name",
    year: "2015 – 2016",
    details: "Major: Science | GPA: 5.00",
  },
];

const Education = () => {
  return (
    <section className="text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center md:items-start  mb-4 md:mb-0">
                <div className="md:mr-4 mr-9">
                  <FaGraduationCap size={30} className="text-indigo-500" />
                </div>
                <div className="">
                  <h3 className=" text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
              </div>
              <div className="text-indigo-400 font-medium">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
