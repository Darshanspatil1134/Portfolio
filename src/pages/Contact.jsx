import React from 'react'
import { img } from '../assets';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';

function Contact() {
  return (
    // <div className="bg-red-300 text-blue-900 min-h-screen">
    //   {/* <p>hello</p> */}
    //     <div className="flex flex-col md:flex-row items-center"/>

     <section className=" bg-sky-200 rounded-xl shadow-lg">
    <div className='flex flex-col lg:flex-row items-center bg-amber-100 p-4 lg:p-10 min-h-screen'>
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-10"></div>
        <img src="public\logo-png.png" alt="myimage" className=' w-120 h-120 rounded-full shadow-md mb-4 md:mb-0 md:mr-8' />
       
        <div className='text-center lg:text-left'>
            <h2 className=" font-bold ml-7 text-sky-900 text-6xl">Get in Touch !</h2>
            <p className="mt-4  leading-relaxed">
                 {/* <span className=' text-shadow-fuchsia-400 font-semibold text-2xl italic  mask-t-from-neutral-950 ml-14'> I will be Glade to get in your touch </span><br /> */}
             <p> <span className=' text-shadow-fuchsia-400 font-semibold text-2xl italic ml-96 mask-t-from-neutral-950'>~ Yours Truely ! </span></p>
             </p>
             <p> <span className=' text-shadow-fuchsia-400 font-semibold  italic ml-110 mask-t-from-neutral-950'>        Darshan Patil </span></p>
              <br />
              
              
              <br />
               <br />
              {/* <p className='mt-2 text-base sm:text-lg italic leading-relaxed max-w-2xl mx-auto lg:mx-0 '>If you Have Suggestion or Wanna Connect to me <br />kindly contact through given details</p> */}
            <div className='flex justify-center lg:justify-start ml-14  mt-9 gap-x-6'>
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
                    <br />
                    <br />
                      <button
              type="Thank u for Your Time !"
              className="w-full  flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors "
            > Thank u for Your Time !</button>
         
          </div>
         
        </div>
        
        </section>
      
    
        
      
  );
}

export default Contact;