import React from "react";
import SkillsImage from "../assets/skills.jpg"; // replace with your image path

const Skills = () => {
  const skills = [
    "HTML5 & CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "VS Code",
    "Excel Data Analysis",
    "Git & GitHub",
    "REST APIs",
    "Power BI",
  ];

  return (
    <section className="bg-white py-16 px-6" id="skills">
      {/* Heading Centered */}
      <h2 className="text-3xl md:text-4xl text-center font-extrabold text-gray-900 mb-12">
        My <span className="text-indigo-600">Skills</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src={SkillsImage}
            alt="Skills illustration"
            className="w-80 md:w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text + Skills */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Here are the technologies and tools I use to craft clean, responsive, and efficient web experiences.
          </p>

          {/* Skills Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-indigo-50 to-yellow-50 border border-gray-200 rounded-xl py-2 px-3 text-gray-800 font-medium text-sm md:text-base shadow-sm hover:shadow-md hover:scale-105 transform transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
