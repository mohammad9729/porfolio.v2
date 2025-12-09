import React from "react";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs,
  FaReact, FaJava, FaDatabase, FaGitAlt, FaGithub, FaFigma, FaCode, FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  // Organize skills into categories
  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
        { name: "MySQL", icon: <FaDatabase className="text-indigo-400 text-4xl" /> },
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "VS Code", icon: <FaCode className="text-blue-400 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500 text-4xl" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-tr from-black via-gray-800 to-gray-900 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <motion.div
                className={`${category.title === "Front-end"
                  ? "flex flex-wrap justify-center gap-4"
                  : "flex justify-center flex-wrap gap-4"
                  }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-md p-4 w-[120px] h-[120px] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.icon}
                    <p className="mt-3 text-sm font-medium text-gray-200 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
