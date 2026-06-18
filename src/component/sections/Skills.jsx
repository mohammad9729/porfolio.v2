import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronRight } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Front-end");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "React / Vite", level: "Advanced", desc: "Building modular single-page web applications with performant virtual DOM structures and state systems.", color: "rgb(34, 211, 238)" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Crafting object-oriented frontend modules, handling asynchronous flows, promises, and DOM manipulations.", color: "rgb(250, 204, 21)" },
        { name: "Tailwind CSS", level: "Advanced", desc: "Designing high-performance styling systems using Tailwind Utility and custom theme overrides.", color: "rgb(56, 189, 248)" },
        { name: "HTML5 / CSS3", level: "Advanced", desc: "Writing semantic markup, accessibility compliance, and structural layouts using CSS Grid and Flexbox.", color: "rgb(249, 115, 22)" },
        { name: "Bootstrap", level: "Intermediate", desc: "Constructing layout scaffolding and responsive utility patterns for rapid prototypes.", color: "rgb(147, 51, 234)" }
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "MySQL", level: "Advanced", desc: "Structuring relational databases, writing queries, and optimizing indexes for transactional workloads.", color: "rgb(129, 140, 248)" },
        { name: "Java", level: "Intermediate", desc: "Developing server-side controller logic, object-oriented paradigms, and system services.", color: "rgb(239, 68, 68)" },
        { name: "Node.js / Express", level: "Intermediate", desc: "Building secure, lightweight, and scalable REST API endpoints and middleware logic.", color: "rgb(52, 211, 153)" }
      ]
    },
    {
      title: "Workflow",
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching strategies, code reviews, and remote repository collaboration.", color: "rgb(244, 63, 94)" },
        { name: "VS Code", level: "Advanced", desc: "Configuring fast, customized IDE workflows, shortcuts, and productive linting systems.", color: "rgb(96, 165, 250)" },
        { name: "Postman", level: "Advanced", desc: "Mocking, testing, and verifying request-response payloads for RESTful server routes.", color: "rgb(251, 146, 60)" }
      ]
    }
  ];

  const currentCategory = skillCategories.find((cat) => cat.title === activeTab);
  const activeDetailSkill = hoveredSkill || currentCategory.skills[0];

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Cpu size={16} /> Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
          >
            Skills & Core Stack
          </motion.h2>
        </div>

        {/* Tab switchers */}
        <div className="flex gap-4 border-b border-gray-800 pb-4 mb-12 overflow-x-auto whitespace-nowrap">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(cat.title);
                setHoveredSkill(null);
              }}
              className={`text-lg font-bold tracking-tight pb-2 relative transition-colors cursor-pointer ${
                activeTab === cat.title ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat.title}
              {activeTab === cat.title && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic HUD Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Editorial list of skills */}
          <div className="lg:col-span-7 space-y-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="divide-y divide-gray-800/60"
              >
                {currentCategory.skills.map((skill, index) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="py-5 flex items-center justify-between group cursor-pointer relative overflow-hidden"
                    >
                      {/* Interactive slide bg effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />

                      <div className="flex items-center gap-4 relative z-10">
                        <span className="text-xs font-mono text-gray-600">
                          {String(index + 1).padStart(2, "0")} //
                        </span>
                        <h3 
                          className="text-xl sm:text-2xl font-black text-gray-400 transition-all duration-300 group-hover:pl-2"
                          style={{ 
                            color: isHovered ? skill.color : "" 
                          }}
                        >
                          {skill.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 relative z-10">
                        <span className="text-xs text-gray-500 uppercase font-mono">
                          {skill.level}
                        </span>
                        <ChevronRight 
                          size={14} 
                          className="text-gray-600 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 duration-300" 
                        />
                      </div>

                      {/* Laser pointer accent line */}
                      {isHovered && (
                        <motion.div 
                          layoutId="laserAccent"
                          className="absolute left-0 bottom-0 h-0.5" 
                          style={{ width: "100%", backgroundColor: skill.color }}
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: High-Tech detail info panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              {/* Decorative brand corner glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 transition-all duration-500"
                style={{ backgroundColor: activeDetailSkill.color }}
              />

              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-gray-800 pb-3 mb-6 font-mono tracking-widest uppercase">
                <span>Skill Specs Monitor</span>
                <span className="font-bold" style={{ color: activeDetailSkill.color }}>ACTIVE_NODE</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-black text-white tracking-tight leading-none mb-1">
                    {activeDetailSkill.name}
                  </h4>
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold mt-1 bg-slate-900 border border-slate-800 text-cyan-400">
                    {activeDetailSkill.level} Expertise
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed font-sans min-h-[60px]">
                  {activeDetailSkill.desc}
                </p>

                {/* Simulated stats bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>Performance Efficiency</span>
                    <span className="text-white font-bold">{activeDetailSkill.level === "Advanced" ? "92%" : "75%"}</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1 overflow-hidden border border-slate-800/50">
                    <motion.div 
                      key={activeDetailSkill.name}
                      initial={{ width: 0 }}
                      animate={{ width: activeDetailSkill.level === "Advanced" ? "92%" : "75%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: activeDetailSkill.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
