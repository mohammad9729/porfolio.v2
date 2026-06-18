import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import regalwalk from "../../images/regalwalk.png";

export default function Projects() {
  const projects = [
    {
      title: "Cloth Review Website",
      description: "A responsive web application where users can browse clothing products, read reviews, and submit their own feedback with an easy-to-use interface.",
      tools: ["React", "Vite", "React Router", "JavaScript", "CSS"],
      image: "/image.png",
      link: "https://cloth-review.vercel.app/",
      github: "https://github.com/mohammad9729", // Add placeholder github link to look professional
      highlights: [
        "Dynamic review submission system with rating selections",
        "Authentication using localStorage to persist user sessions",
        "Modern interface using gradient backgrounds & glassmorphism",
        "Responsive category browsing & filter layouts"
      ]
    },
    {
      title: "Regal Walk",
      description: "A landing page built with HTML, CSS, Bootstrap, and JavaScript showcasing the Regal Walk project with interactive sections.",
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      image: regalwalk,
      link: "https://regal-walk-nine.vercel.app/",
      github: "https://github.com/mohammad9729",
      highlights: [
        "Fully responsive Bootstrap layout across all mobile viewports",
        "Interactive DOM components utilizing vanilla JS",
        "Clean semantic markup for search visibility"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Sparkles size={16} /> Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Featured Projects & Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-2"
          >
            A selective exhibition of applications I have designed and engineered.
          </motion.p>
        </div>

        {/* Projects Space */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden group border border-gray-800 bg-gray-950 shadow-2xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
                  />
                </motion.a>
              </div>

              {/* Text / Details Column */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold bg-gray-900 border border-gray-800 text-indigo-300 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Key Accomplishments</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors text-sm shadow-md"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 border border-gray-800 hover:border-gray-700 bg-gray-900 text-gray-300 hover:text-white font-semibold rounded-lg transition-all text-sm"
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
