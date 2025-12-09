import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import Skills from "./Skills";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">

      {/* Hero Section with Two-Column Layout */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" id="home">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 18% 50%, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.02) 20%, transparent 40%)",
          }}
        />

        {/* Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-0">

            {/* Left Column - Text Content */}
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Mohammad
                </span>
              </motion.h1>

              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.h3>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I build responsive, accessible, and performant web applications using modern technologies.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="https://drive.google.com/file/d/16Zg26vEjP4SnpTFQcJsxEmVo7AZSch1I/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-cyan-400 border-2 border-indigo-500 text-indigo-800 font-semibold rounded-full hover:bg-indigo-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 border-2 border-indigo-500 text-indigo-300 font-semibold rounded-full hover:bg-indigo-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center mb-12 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="Developer illustration"
                className="w-full max-w-md lg:max-h-[400px] object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>


      {/* Projects Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Project />
      </motion.div>


      {/* About Me Section */}
      <motion.section
        id="about"
        className="bg-gray-900 py-16 px-6 text-center text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hello! I'm <span className="font-semibold text-white">Mohammad Khan</span>,
          a passionate <span className="text-indigo-400">Full Stack Developer</span> who enjoys
          turning complex problems into simple, elegant, and user-friendly solutions.
          <br />
          <br />
          I specialize in building modern web applications using{" "}
          <span className="text-indigo-400">React</span>,{" "}
          <span className="text-indigo-400">Java</span>, and{" "}
          <span className="text-indigo-400">MySQL</span>. I'm always eager to learn
          new technologies, explore better design patterns, and create digital
          experiences that make a difference.
        </p>

        <motion.div
          className="mt-10 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-indigo-500/20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">What I Do</h3>
          <ul className="space-y-2 text-left">
            <li>🚀 Build responsive and scalable web apps</li>
            <li>🎨 Create smooth, modern UI/UX with React + Tailwind</li>
            <li>💻 Develop full-stack solutions with Java and MySQL</li>
            <li>⚡ Optimize performance and user experience</li>
          </ul>
        </motion.div>
      </motion.section>
    </main>
  );
}
