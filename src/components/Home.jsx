import React from "react";
import HomeIcon from "../assets/home-icon1.jpg"; // ✅ replace with your actual image

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fff7e9] px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row items-center md:items-stretch">
        {/* Left Text Section */}
        <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h3 className="text-sm sm:text-base font-semibold text-yellow-500 tracking-wider">
            FRONTEND DEVELOPER
          </h3>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hello, my name is{" "}
            <span className="block text-indigo-600 mt-2 sm:mt-3">
              Raseeth Ali M
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            I’m passionate about creating beautiful, efficient, and modern web
            experiences using <b>React.js</b> and <b>Tailwind CSS</b>.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md transition"
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/raseeth-ali-90475b300"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-2.5 border border-gray-400 hover:bg-green-200 text-gray-800 font-medium rounded-md transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-1 bg-yellow-400 flex items-center justify-center p-6 sm:p-8 md:p-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white rounded-bl-[80px] sm:rounded-bl-[100px] md:rounded-bl-[150px]"></div>
          <img
            src={HomeIcon}
            alt="Raseeth"
            className="relative z-10 w-48 sm:w-60 md:w-72 lg:w-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
