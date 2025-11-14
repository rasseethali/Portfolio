

import React from "react";
import ProfilePic from "../assets/its-me.jpg"; // make sure file name matches
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">  
              <h2 className="text-3xl text-center md:text-4xl  font-extrabold text-gray-900">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 md:w-60 md:h-60 rounded-xl shadow-lg p-4 mt-4 overflow-hidden ">
              <img
                src={ProfilePic}
                alt="Raseeth Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Intro & Details */}
          <div className="md:col-span-2">
          
            <p className="mt-4 text-gray-600 max-w-3xl">
              I’m <strong>Raseeth Ali M</strong>, a Frontend Developer focused on building
              clean, responsive, and accessible web applications using React.js and Tailwind CSS.
              I enjoy solving UI problems, optimizing performance, and learning modern front-end tools.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800 font-medium">Coimbatore, India</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p className="text-gray-800 font-medium">B.Tech ( Artifical Intelligence and Data Science )</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-gray-800 font-medium">Frontend Developer</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="text-gray-800 font-medium">Open to internships & freelance & Permenant Job</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href={Resume}
                download
                className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-block px-4 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition"
              >
                See Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
