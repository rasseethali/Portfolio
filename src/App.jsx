import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-30 shadow-sm">
        <nav className="max-w-5xl mx-auto px-6 py-7 flex items-center justify-between">
          <a href="#home" className=" text-2xl font-semibold text-indigo-800"> Raseeth Ali</a>
         

          <div className="hidden  md:flex gap-6  items-center ">
            <a href="#home" className="hover:text-indigo-600 ">Home</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about" className="border-t border-gray-100"><About /></section>
        <section id="skills" className="border-t border-gray-100"><Skills /></section>
        <section id="projects" className="border-t border-gray-100"><Projects /></section>
        <section id="contact" className="border-t border-gray-100"><Contact /></section>

        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Raseeth M • Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}

export default App;
