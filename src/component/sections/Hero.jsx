import React from "react";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Dynamic colorful blur spheres in the background */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-sm font-medium backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for full-time opportunities
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Mohammad Khan
              </span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-400"
            >
              Full Stack Developer & UI Designer
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft clean, responsive, and performance-optimized web solutions, combining intuitive frontend design with reliable backend systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="/Mohammad Khan.pdf"
                download="Mohammad-Khan-Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <FileText size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-gray-700 hover:border-indigo-500/50 bg-gray-900/60 backdrop-blur text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 active:scale-95"
              >
                <Send size={18} />
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-6 text-gray-400"
            >
              <a href="https://github.com/mohammad9729" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/mohammad-khan-2912sk" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:mdk972913@gmail.com" className="hover:text-purple-400 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Premium Tech Graphic (No GIF, Modern UI Frame) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden glass-panel border border-gray-800 p-1 flex items-center justify-center group shadow-2xl">
              {/* Outer glowing border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Internal Mock Code editor or design visual */}
              <div className="w-full h-full bg-slate-950/80 rounded-2xl p-6 flex flex-col justify-between font-mono text-sm leading-relaxed border border-gray-800">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-gray-500 text-xs ml-2">Developer.js</span>
                </div>
                
                <div className="flex-1 py-4 space-y-2 text-xs text-indigo-300">
                  <p><span className="text-pink-400">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-300">"Mohammad Khan"</span>,</p>
                  <p className="pl-4">role: <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-4">skills: [</p>
                  <p className="pl-8 text-cyan-300">"React", "NodeJS", "MySQL",</p>
                  <p className="pl-8 text-cyan-300">"TailwindCSS", "Java"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">passionateAbout: <span className="text-amber-300">"Clean UI & Robust Code"</span></p>
                  <p>&#125;;</p>
                </div>

                <div className="border-t border-gray-800 pt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>UTF-8</span>
                  <span>React / Vite</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
