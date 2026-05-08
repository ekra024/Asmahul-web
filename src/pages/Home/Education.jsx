import { HiAcademicCap } from 'react-icons/hi';
import { MdLocationOn, MdCalendarToday } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { BsStarFill, BsPatchCheckFill } from 'react-icons/bs';
import { GiOpenBook, GiTrophy } from 'react-icons/gi';
import { TbCertificate, TbMapPin } from 'react-icons/tb';
import { PiCodeBold } from 'react-icons/pi';
import { LuCalendarDays } from 'react-icons/lu';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    shortDegree: 'BSc in CSE',
    institution: 'University of Barishal',
    location: 'Barishal, Bangladesh',
    duration: '2022 – Present',
    status: 'Ongoing',
    statusColor: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
    dotColor: 'bg-teal-400',
    lineColor: 'from-teal-400/60 to-transparent',
    highlights: [
      {
        icon: <GiOpenBook size={15} className="text-blue-400 mt-0.5 shrink-0" />,
        text: 'Core focus on Data Structures, Algorithms & Software Engineering',
      },
      {
        icon: <GiTrophy size={15} className="text-yellow-400 mt-0.5 shrink-0" />,
        text: 'Participated in ICPC & NGPC competitive programming contests',
      },
      {
        icon: <PiCodeBold size={15} className="text-teal-400 mt-0.5 shrink-0" />,
        text: 'Built full-stack MERN projects with real-world application',
      },
      {
        icon: <BsStarFill size={13} className="text-pink-400 mt-0.5 shrink-0" />,
        text: 'Active member of the university programming community',
      },
      {
        icon: <TbCertificate size={15} className="text-purple-400 mt-0.5 shrink-0" />,
        text: '7th semester student — on track to graduate in 2025',
      },
    ],
  },
];

const Education = () => {
  return (
    <section className="py-24 text-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl font-bold text-white">Educational Qualification</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-linear-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10">

              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full ${edu.dotColor} ring-4 ring-gray-900 mt-1 z-10 shrink-0`}
                />
                <div className={`flex-1 w-px bg-linear-to-b ${edu.lineColor} mt-2`} />
              </div>

              {/* Card */}
              <div className="flex-1 pb-12">
                <div className="group p-6 md:p-8 rounded-2xl border border-gray-700/50 bg-gray-800/40 hover:border-gray-600/60 hover:bg-gray-800/60 transition-all duration-300">

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Icon badge — IoSchoolSharp from react-icons/io5 */}
                      <div className="p-2.5 rounded-xl bg-gray-700/60 border border-gray-600/40">
                        <IoSchoolSharp size={22} className="text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                          {edu.shortDegree}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5 hidden md:block">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    {/* Status badge — BsPatchCheckFill from react-icons/bs */}
                    <span
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${edu.statusColor}`}
                    >
                      <BsPatchCheckFill size={12} />
                      {edu.status}
                    </span>
                  </div>

                  {/* Full degree mobile */}
                  <p className="text-xs text-gray-400 mb-4 md:hidden">{edu.degree}</p>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {/* FaUniversity from react-icons/fa */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-300">
                      <FaUniversity size={14} className="text-gray-500" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    {/* TbMapPin from react-icons/tb */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <TbMapPin size={15} className="text-gray-500" />
                      <span>{edu.location}</span>
                    </div>
                    {/* LuCalendarDays from react-icons/lu */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <LuCalendarDays size={14} className="text-gray-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-700/50 mb-5" />

                  {/* Highlights — each with its own icon */}
                  <ul className="flex flex-col gap-3">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                        {point.icon}
                        {point.text}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;