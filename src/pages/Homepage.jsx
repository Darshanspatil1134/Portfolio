import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Homepage() {
  return (
    <div className="bg-blue-950 min-h-screen p-4 flex items-center justify-center">
      <section className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-10">
            <img
              src="/img.jpg"
              alt="img"
              // Adjusted image sizes to be more responsive
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto lg:mx-0
                       transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-6"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-fuchsia-700 font-bold mb-2">
              Hello Everybody
            </h1>
            <h5 className="text-2xl sm:text-3xl md:text-4xl text-cyan-950 font-bold ml-0 lg:ml-7 italic">
              It's Darshan Patil
            </h5>
            <p className="mt-2 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to my homepage! Hi, I’m Darshan!, a passionate frontend developer with a love for creating beautiful and responsive user interfaces. I enjoy working with React, Tailwind CSS, and modern web technologies to bring ideas to life. Welcome to my homepage—feel free to explore and connect!
            </p>

            <div className="flex justify-center lg:justify-start mt-6 gap-x-6 sm:gap-x-8">
              <a
                href="https://www.linkedin.com/in/darshan-patil-938498358/"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} className="sm:size-8" />
              </a>

              <a
                href="https://github.com/patildarshan1134"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} className="sm:size-8" />
              </a>

              <a
                href="https://www.instagram.com/darshan_patil1134/"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={24} className="sm:size-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;