import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Feel free to reach out — I’m always open to new opportunities,
          collaborations, or just a friendly chat about front-end development!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Email */}
        <a
          href="mailto:raseeth46@gmail.com"
          className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
        >
          <Mail className="w-8 h-8 text-indigo-600" />
          <p className="font-medium text-gray-800">raseethali46@gmail.com</p>
        </a>

        {/* Phone */}
        <div className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
          <Phone className="w-8 h-8 text-indigo-600" />
          <p className="font-medium text-gray-800">+91 8110971596</p>
        </div>

        {/* Github */}
        <a
          href="https://github.com/rasseethali"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
        >
          <Github className="w-8 h-8 text-indigo-600" />
          <p className="font-medium text-gray-800">GitHub Profile</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/raseeth-ali-90475b300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
        >
          <Linkedin className="w-8 h-8 text-indigo-600" />
          <p className="font-medium text-gray-800">LinkedIn Profile</p>
        </a>
      </div>

      {/* Footer / Signature */}
      <div className="mt-12 text-center border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-indigo-600">Raseeth Ali M</h3>
        <p className="text-gray-500 text-sm">
          Frontend Developer | React.js & Tailwind CSS
        </p>
      </div>
    

      </section>
  );
};

export default Contact;


      