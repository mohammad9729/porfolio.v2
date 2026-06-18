import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layout, Database, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layout className="text-cyan-400 w-6 h-6" />,
      title: "Frontend Engineering",
      desc: "Creating responsive, fast, and accessible user interfaces using React, Next.js, and modern CSS frameworks like Tailwind."
    },
    {
      icon: <Cpu className="text-indigo-400 w-6 h-6" />,
      title: "Backend Development",
      desc: "Designing and building robust RESTful APIs and server solutions with Node.js, Express, and Java ecosystems."
    },
    {
      icon: <Database className="text-purple-400 w-6 h-6" />,
      title: "Database Management",
      desc: "Structuring schema models and writing optimized queries using relational databases like MySQL and SQL server."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Sparkles size={16} /> About Me
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Passionate About Crafting Seamless Digital Experiences
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="font-semibold text-white">Mohammad Khan</span>. I am a dedicated developer focused on turning complex business requirements into simple, elegant, and interactive software products.
            </p>
            <p>
              My expertise spans the entire development lifecycle, from sketching mockups to managing full-stack database architectures. I love learning new tools, refining workflows, and keeping up with industry standards.
            </p>
            <div className="pt-4 border-t border-gray-800 flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-white">2+</p>
                <p className="text-sm text-gray-400 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">10+</p>
                <p className="text-sm text-gray-400 font-medium">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel border border-gray-800 rounded-2xl p-6 hover:border-gray-700/80 transition-all duration-300 hover:-translate-y-1 group flex gap-4"
              >
                <div className="p-3 bg-gray-900/60 rounded-xl h-fit border border-gray-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
