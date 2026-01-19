// Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// replace image paths with your real images
import petBuddyImg from '../../assets/petBuddy.png';
import tastyShareImg from '../../assets/tastyShare.png';
import movieTimeImg from '../../assets/movieTime.png';
import ecoAdventureImg from '../../assets/ecoAdventure.png';

const projects = [
  {
    name: 'PetBuddy',
    image: petBuddyImg,
    description:
      'A pet adoption and management platform where users can explore pets, request adoption, create campaigns and donate  with authentication and role-based access.',
    live: 'https://petbuddy-31d79.web.app/',
    client: 'https://github.com/ekra024/petBuddy',
    server: 'https://github.com/ekra024/pet_buddy_server',
  },
  {
    name: 'TastyShare',
    image: tastyShareImg,
    description:
      'A recipe-sharing web application allowing users to post, explore, and favorite recipes with Firebase authentication and responsive UI.',
    live: 'https://tasty-share.web.app/',
    client: 'https://github.com/ekra024/tasty-share',
    server: 'https://github.com/ekra024/movie-project-server',
  },
  {
    name: 'MovieTime',
    image: movieTimeImg,
    description:
      'A movie browsing platform that displays trending, popular, and top-rated movies with dynamic routing and clean UI experience.',
    live: 'https://movie-project-45202.web.app/',
    client: 'https://github.com/ekra024/movie-project',
    server: 'https://github.com/ekra024/movie-project-server',
  },
  {
    name: 'EcoAdventure',
    image: ecoAdventureImg,
    description:
      'An eco-tourism adventure website showcasing sustainable travel places with user authentication and interactive layouts.',
    live: 'https://adventure-project-93ed2.web.app/',
    client: 'https://github.com/ekra024/adventure-project',
    server: 'https://github.com/ekra024/adventure-project',
  },
];

const Projects = () => {
  return (
    <section className="text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>


                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-none text-white flex items-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline text-gray-200 border-gray-400 flex items-center gap-2"
                  >
                    <FaGithub />
                    Client
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline text-gray-200 border-gray-400 flex items-center gap-2"
                  >
                    <FaGithub />
                    Server
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
