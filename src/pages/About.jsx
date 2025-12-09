import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 px-6 py-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About <span className="text-cyan-400">Me</span>
        </h2>

    
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hello! I’m <span className="font-semibold text-white">Mohammad Khan</span>, 
          a passionate <span className="text-indigo-400">Full Stack Developer</span> who enjoys 
          turning complex problems into simple, elegant, and user-friendly solutions.  
          <br />
          <br />
          I specialize in building modern web applications using{" "}
          <span className="text-indigo-400">React</span>,{" "}
          <span className="text-indigo-400">Java</span>, and{" "}
          <span className="text-indigo-400">MySQL</span>. I’m always eager to learn 
          new technologies, explore better design patterns, and create digital 
          experiences that make a difference.
        </p>

       
        <div className="mt-10 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">
            What I Do
          </h3>
          <ul className="space-y-2 text-left">
            <li>🚀 Build responsive and scalable web apps</li>
           
            <li>🎨 Create smooth, modern UI/UX with React + Tailwind</li>
           
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
