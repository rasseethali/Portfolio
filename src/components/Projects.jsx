

  import React from "react";
import { Film, Globe, Cloud, Flower, HelpCircle, Flower2Icon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Finder App",
      description: "React + TMDB API movie search and watchlist.",
      link: "https://movies-website-six-drab.vercel.app/",
      icon: <Film className="w-10 h-10 text-indigo-600" />,
      tags: ["React", "API", "Tailwind"],
    },
    {
      title: "Country Search",
      description: "Search countries with live API and flag preview.",
      link: "https://country-sable-beta.vercel.app/",
      icon: <Globe className="w-10 h-10 text-green-600" />,
      tags: ["HTML", "API", "Tailwind"],
    },
    {
      title: "Weather App",
      description: "Weather forecast app with real-time updates.",
      link: "https://weather-app-rouge-three-31.vercel.app/",
      icon: <Cloud className="w-10 h-10 text-blue-500" />,
      tags: ["React", "API", "Tailwind"],
    },
    {
  title: "Greenden",
  description: "A beautiful plant store website where you can explore and buy plants online. Designed with responsive layouts and modern UI/UX.",
  link: "https://rasseethali.github.io/Greenden-tailwind/",
  icon: <Flower className="w-10 h-10 text-pink-500" />,
  tags: ["HTML5", "Tailwind CSS", "JavaScript"],
},

    {
      title: "Quiz App",
      description: "React-powered quiz app with instant score tracking.",
      link: "https://react-js-quiz.vercel.app/",
      icon: <HelpCircle className="w-10 h-10 text-purple-600" />,
      tags: ["React", "Tailwind"],
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          A collection of my latest web applications built using React.js, APIs, and Tailwind CSS.
        </p>
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="p-4 bg-gray-50 rounded-full mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {p.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
