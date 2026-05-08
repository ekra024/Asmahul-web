import { FaCode, FaLayerGroup, FaCube, FaBrain,FaPuzzlePiece } from 'react-icons/fa';
import myPic from "/Work.png"
import { FaPersonCirclePlus } from 'react-icons/fa6';


const AboutMe = () => {
   const hobbies = [{
    icon: <FaCube className="text-teal-400" size={18} />,
    label: "Rubik's Cube",
    desc: "Speed solving & algorithms",
  },
  {
    icon: <FaPuzzlePiece className="text-yellow-400" size={18} />,
    label: "Puzzle Solving",
    desc: "Logic & pattern thinking",
  },
  {
    label: "Building Connections",
    desc: "Meeting & bonding with people",
  },
  {
    icon: <FaBrain className="text-pink-400" size={18} />,
    label: "Psychology",
    desc: "Understanding human behaviour",
  },
];

const stats = [
  { value: '120+', label: 'LeetCode Problems' },
  { value: '1597', label: 'CodeChef Rating' },
  { value: '3+', label: 'MERN Projects' },
  { value: 'ICPC', label: 'Participant' },
];

  return (
    <section className="py-24 text-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Get to know me</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-linear-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* Main layout — photo left, content right */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Left — Photo */}
          <div className="shrink-0 flex flex-col items-center gap-5">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-teal-400 via-blue-500 to-purple-500 opacity-50 blur-sm" />
              <img
                src={myPic}
                alt="Ekra"
                className="relative w-56 h-64 object-fit rounded-2xl border-2 border-gray-700"
              />
              {/* Available badge */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gray-900 border border-teal-500/40 text-teal-400 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Open to opportunities
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center p-3 rounded-xl bg-gray-800/60 border border-gray-700/50"
                >
                  <span className="text-lg font-bold text-white">{s.value}</span>
                  <span className="text-[11px] text-gray-400 text-center leading-tight mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text content */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Greeting */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-blue-400">Asmahul Husna</span> 👋
              </h3>
              <p className="text-sm text-gray-400 tracking-wide">
                Barishal University Student · Barisal University, Bangladesh
              </p>
            </div>

            {/* Story paragraphs */}
            <div className="flex flex-col gap-4 text-gray-300 leading-relaxed text-[15px]">
              <p>
                My journey into programming didn't start with a tutorial — it started with a
                problem I couldn't solve. Competitive programming pulled me in before I even
                knew what a framework was. Debugging logic, optimising algorithms, and pushing
                for that accepted verdict taught me how to <span className="text-white font-medium">think like an engineer</span> from day one.
                I've competed in <span className="text-white font-medium">ICPC and NGPC</span>, earned a{' '}
                <span className="text-white font-medium">1597 CodeChef rating</span>, and solved
                120+ problems on LeetCode — every one of them a lesson in patience and precision.
              </p>
              <p>
                Over time, that problem-solving mindset found a new home in{' '}
                <span className="text-white font-medium">full-stack web development</span>. I love
                building things people actually use — from clean, responsive UIs to robust backends
                with real authentication and data flow. Working across the MERN stack, I've shipped
                projects with React, Node.js, MongoDB, Firebase, and JWT-based auth. For me,
                a great app isn't just functional — it's something that{' '}
                <span className="text-white font-medium">feels right to use</span>.
              </p>
              <p>
                Right now I'm in my final semester at Barisal University, actively preparing for
                fresher software engineer roles at top Bangladeshi tech companies. I'm the kind of
                person who writes code by day and reads about human psychology at night — because
                understanding people is just as important as understanding systems.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700/50" />

            {/* Hobbies */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Beyond the code</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {hobbies.map((h) => (
                  <div
                    key={h.label}
                    className="flex flex-col gap-1.5 p-3 rounded-xl bg-gray-800/50 border border-gray-700/40 hover:border-gray-500/60 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      {h.icon}
                      <span className="text-sm font-semibold text-white">{h.label}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-snug">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;