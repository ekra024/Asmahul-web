import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiCplusplus, SiC } from 'react-icons/si';
import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    accentColor: 'bg-blue-500/10 text-blue-400',
    skills: [
      { name: 'React', icon: <FaReact size={32} className="text-blue-400" /> },
      { name: 'JavaScript', icon: <DiJavascript1 size={32} className="text-yellow-300" /> },
      { name: 'HTML5', icon: <DiHtml5 size={32} className="text-orange-500" /> },
      { name: 'CSS3', icon: <DiCss3 size={32} className="text-blue-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss size={32} className="text-teal-400" /> },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/20',
    accentColor: 'bg-green-500/10 text-green-400',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={32} className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
      { name: 'Firebase', icon: <SiFirebase size={32} className="text-yellow-400" /> },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/20',
    accentColor: 'bg-purple-500/10 text-purple-400',
    skills: [
      { name: 'C++', icon: <SiCplusplus size={32} className="text-blue-400" /> },
      { name: 'C', icon: <SiC size={32} className="text-blue-300" /> },
      { name: 'Git', icon: <FaGitAlt size={32} className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub size={32} className="text-gray-300" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="text-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">What I work with</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-linear-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((cat) => (
            <div key={cat.category}>

              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${cat.borderColor} ${cat.accentColor}`}>
                  {cat.category}
                </span>
                <div className="flex-1 h-px bg-gray-700/50" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      group relative flex flex-col items-center justify-center gap-2.5
                      p-4 rounded-xl border border-gray-700/50
                      bg-linear-to-br from-gray-800/60 to-gray-900/60
                      hover:border-gray-500/60 hover:bg-linear-to-br ${cat.color}
                      hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30
                      transition-all duration-300 cursor-default
                    `}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;