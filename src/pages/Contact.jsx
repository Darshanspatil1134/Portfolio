import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);

    setSubmissionStatus('success');
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setSubmissionStatus(null);
    }, 5000);
  };

  return (
    <div className="bg-blue-950 min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-8 rounded-2xl shadow-2xl hover:bg-zinc-100 bg-white transition-shadow duration-300 hover:shadow-3xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-shrink-0 flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-inner-lg">
            <h2 className="font-bold text-sky-900 text-4xl mb-6">Get in Touch!</h2>
            <img
              src="/edit.png"
              alt="myimage"
              className="w-96 h-96 rounded-full object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3"
            />
            <p className="mt-6 text-xl italic text-gray-700">~ Yours Truly, Darshan Patil</p>
            <div className="flex justify-center mt-6 gap-x-6">
              <a
                href="https://www.linkedin.com/in/darshan-patil-938498358/"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/patildarshan1134"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/darshan_patil1134/"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 p-6">
            <p className="mt-2 text-lg leading-relaxed text-shadow-black mb-6">
              If you have a suggestion or want to connect, please fill out the form below!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 hover:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 hover:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 hover:border-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {submissionStatus === 'success' && (
        <div className="fixed bottom-5 right-5 bg-teal-700 text-white p-4 rounded-lg shadow-lg z-50">
          <p>You have successfully contacted Darshan!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
