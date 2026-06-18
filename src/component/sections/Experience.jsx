import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "React.js Developer Intern",
      company: "The Entrepreneurship Network (Limitless Technologies LLP)",
      location: "Remote",
      duration: "March 2025 – June 2025",
      points: [
        "Developed and optimized interactive UI components using React.js, improving page load speed by 20%.",
        "Utilized Bootstrap and Tailwind CSS to ensure 100% mobile-responsive layouts across diverse screen sizes.",
        "Collaborated with senior developers to integrate backend APIs and manage application state."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Briefcase size={16} /> Timeline
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Work History & Experience
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start sm:flex-row-reverse"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-[7px] w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 z-10" />

                {/* Content Card */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pl-8">
                  <div className="glass-panel border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors shadow-xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-semibold text-indigo-400 mb-4">{exp.company}</h4>
                    
                    <ul className="text-sm text-gray-400 leading-relaxed list-disc pl-4 space-y-2">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
