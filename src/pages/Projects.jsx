import React from 'react';

function Resume() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10 mt-10 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="text-center border-b pb-4">
        <h1 className="text-4xl font-extrabold italic text-gray-900">Darshan Patil</h1>
        <p className="text-orange-400 text-lg mt-1">Full Stack Web Developer</p>
        <p className="text-sm text-gray-600 mt-1">
          Email: darshanspatil1134@gmail.com | Phone: +91-95183 77707
        </p>
      </header>

      {/* Profile Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Profile</h2>
        <p className="text-gray-700 leading-relaxed">
      Welcome to my homepage! Hi, I’m Darshan!, A passionate Frontend & Backend developer with a love for creating beautiful and responsive user interfaces. I enjoy working with React,Html/CSS, Tailwind CSS, and modern web technologies 
      
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Skills</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB, MySQL</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, Vite, VS Code,Eclipse</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-800">Intern Web Developer – Rich System Infotech</h3>
          <p className="text-sm text-gray-600"> June 2025 – August 2025</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Developed modern web interfaces using React and Node.js</li>
            <li>Created E Commerces Sides</li>
            <li>Created Hotel Management Application</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-800">Pursuing Diploma/Polytechnic in Information Technology !  </h3>
          <p className="text-sm text-gray-600">From 2023 – 2026</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Projects</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <strong>E-Commerce Website:</strong> Developed an Amazon-like platform featuring product search, cart, authentication, and responsive design using React and Tailwind CSS.
          </li>
          <li>
            <strong>X and O Game:</strong> Created an interactive tic-tac-toe game using HTML, CSS, and JavaScript.
          </li>
          <li> <strong>Hotel Management System:</strong> Created Hotel Management System Application using Tailwind ,Note.js          </li>
        </ul>
      </section>

      {/* Contact Section */}
      {/* <section className="mt-8 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Contact</h2>
        <p className="text-gray-700">Location: Nashik,Maharashtra, India</p>
        <p className="text-gray-700">
          GitHub:{' '}
          <a
            href=""
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </p>
        <p className="text-gray-700">
          LinkedIn:{' '}
          <a
            href=""
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
          
          </a>
        </p>
      </section> */}
    </div>
  );
}

export default Resume;