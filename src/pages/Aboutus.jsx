import React from 'react';
import { img } from '../assets';

const AboutMe = () => {
  return (
    <div className="bg-emerald-200 text-gray-800 min-h-screen">
   <section className="max-w-4xl mx-auto p-6 mt-8 bg-emerald-200 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <img src={img} 
          alt="mineimage" 
          className=' w-80 h-80 rounded-xl shadow-md mb-3 md:mb-0 md:mr-6'/>
                <div>
            <h2 className="text-2xl font-bold text-sky-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Heyy! I am <strong>Darshan Patil</strong>, an ambitious and innovative frontend developer
              with a deep-rooted passion for Development, elegant, and high-performance web applications.
              I leverage the power of modern frontend technologies—including <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>—to transform complex ideas into intuitive user interfaces.
            </p>  
            <p className="mt-3 text-gray-600">
              With a relentless drive for excellence, I thrive in dynamic environments that demand both precision and creativity.
              My mission is to merge code and creativity to deliver experiences that are not only functional but delightful.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-green-800 mb-4">Languages Known !</h2>
        <p className="text-gray-700 mb-3">
          I have cultivated a strong foundation in multiple programming languages and web technologies, equipping me to build responsive and scalable applications:
        </p>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>C Programming – Proficient in procedural logic and memory management.</li>
          <li>C++ – Experienced with object-oriented paradigms and STL.</li>
          <li>Java – Skilled in core concepts, OOP, and Java-based application development.</li>
          <li>JavaScript – Capable of building dynamic, client-side logic and interaction.</li>
          <li>HTML &amp; CSS – Well-versed in semantic markup and responsive UI design.</li>
          <li>Python – Adaptive with scripting, automation, and data-driven logic.</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto p-6 mt-6 bg-zinc-200 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-bold text-green-600 mb-4">Education</h2>
        <p className="text-gray-700">
          I am currently in the final phase of my academic journey, pursuing a 3-year Diploma in Information Technology at <strong>K. K. Wagh Polytechnic, Nashik</strong>.
          This rigorous program has empowered me with both theoretical and hands-on expertise in software development, networking, and modern IT practices.
        </p>
        <p className="mt-3 text-gray-600 italic">
          My academic exposure, combined with a proactive learning attitude, fuels my ambition to contribute meaningfully to the evolving tech landscape.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;