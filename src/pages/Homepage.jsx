
import React from 'react';
import { img } from '../assets';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Homepage() {
  return (

    <section className="  rounded-xl shadow-lg">
    <div className='flex flex-col lg:flex-row items-center bg-amber-50 p-4 lg:p-10 min-h-screen'>
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-10">
        <img
          src={img}
          alt="img"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover mx-auto lg:mx-0"
        />
      </div>

      <div className='text-center lg:text-left'>
        <h1 className='text-3xl sm:text-4xl text-fuchsia-700 font-bold mb-2'>Hello Everybody</h1>
        <h5 className='text-5xl text-cyan-950 font-bold ml-7 italic mask-t-from-neutral-950'>It's Darshan Patil</h5>
        <p className='mt-2 text-base sm:text-lg italic leading-relaxed max-w-2xl mx-auto lg:mx-0'>
          Welcome to my homepage! Hi, I’m Darshan!, a passionate frontend developer with a love for creating beautiful and responsive user interfaces. I enjoy working with React, Tailwind CSS, and modern web technologies to bring ideas to life. Welcome to my homepage—feel free to explore and connect!
        </p>

        <div className='flex justify-center lg:justify-start mt-6 gap-x-6'>
          <a
            href='https://www.linkedin.com/in/darshan-patil-938498358/'
            className='text-blue-600 hover:text-blue-800 transition-colors duration-300'
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href='https://github.com/patildarshan1134'
            className='text-gray-800 hover:text-gray-600 transition-colors duration-300'
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>

          <a
            href='https://www.instagram.com/darshan_patil1134/'
            className='text-pink-600 hover:text-pink-800 transition-colors duration-300'
            aria-label="Instagram Profile"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Homepage;







