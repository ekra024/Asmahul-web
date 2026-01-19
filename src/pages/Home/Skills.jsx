import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase size={40} className="text-yellow-400" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={40} className="text-yellow-300" /> },
  { name: 'HTML5', icon: <DiHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS3', icon: <DiCss3 size={40} className="text-blue-600" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt size={40} className="text-red-500" /> },
];

const Skills = () => {

 
  return (
    <section className="text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;