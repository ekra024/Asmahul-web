// Contact.jsx
import React from 'react';
import { BiMessage, BiMessageAltAdd } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-800 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white">
              Let’s build something meaningful <BiMessageAltAdd className='inline text-blue-500' /> 
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Whether you have a project idea, collaboration opportunity,
              or just want to say hello — feel free to reach out.
              I’m always open to discussing new ideas and challenges.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 pt-4 justify-center">
              <a
                href="https://github.com/ekra024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition text-5xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/asmahul-husna-1503a4234/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition text-5xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
            <form className="space-y-5">
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  About You
                </label>
                <input
                  type="text"
                  placeholder="Developer, Recruiter, Client..."
                  className="input input-bordered w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
