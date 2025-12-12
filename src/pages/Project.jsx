import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "Cloth Review Website",
description:
  "A responsive web application where users can browse clothing products, read reviews, and submit their own feedback with an easy-to-use interface.",
tools: ["React", "Vite", "React Router", "JavaScript", "CSS"],
image:
  "image.png",
link: "https://cloth-review.vercel.app/",
highlights: [
  {
    title: "User Review System",
    detail:
      "Developed a dynamic review submission system where users can add reviews, ratings, and view existing feedback for each product.",
  },
  {
    title: "Authentication with LocalStorage",
    detail:
      "Implemented login and registration using localStorage to manage user sessions without a backend server.",
  },
  {
    title: "Modern UI Design",
    detail:
      "Created an animated, modern interface using gradient backgrounds, glassmorphism, and smooth transitions for an engaging user experience.",
  },
  {
    title: "Product Browsing Interface",
    detail:
      "Designed responsive product cards and category-based browsing for improved user navigation.",
  },
],
},
    {
      title: "Coffee Shop Website",
      description:
        "A modern and responsive website for a coffee shop featuring interactive sections like menu, testimonials, and contact form built with Swiper.js and responsive design principles.",
      tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/9/CB/PR/TM/5504430/arabica-coffee-beans-roasted.jpg",
      link: "https://mhodcoffeeshop.netlify.app/",
      highlights: [
        {
          title: "Interactive Menu",
          detail:
            "Designed an attractive coffee menu section with smooth scrolling and category filtering.",
        },
        {
          title: "Swiper.js Testimonials",
          detail:
            "Implemented a responsive testimonial slider using Swiper.js for dynamic customer feedback.",
        },
        {
          title: "Mobile-Responsive Design",
          detail:
            "Built with responsiveness in mind to ensure optimal user experience across all devices.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-black text-white" id="projects">
      <div className="w-full px-6">
        
        <motion.h2
          className="mt-5 text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-blue-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Some of my recent work
        </motion.p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
             
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-700 text-cyan-300 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-400 font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-cyan-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6 text-white">
                  Project Highlights
                </h4>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <h5 className="font-semibold">{highlight.title}</h5>
                        <p className="text-gray-400">{highlight.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
