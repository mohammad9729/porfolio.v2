import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-900 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-6"
        >
          {/* Left Side */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Mohammad Khan
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-md">
              Crafting digital solutions with modern technologies. Passionate
              about building efficient and scalable applications.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-8">
            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Connect
              </h4>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/mohammad-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mohammad-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com/mohammad-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FaTwitter size={14} />
                  <span>Twitter</span>
                </a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:mdk972913@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FaEnvelope size={14} />
                  <span>Email</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <FaPhone size={14} />
                  <span>+91 73870 06733</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt size={14} />
                  <span>Pune, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Mohammad Khan. All rights reserved.
            </div>

            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Built with</span>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <FaCode size={12} className="text-indigo-400" />
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <span>Tailwind CSS</span>
              </div>
            </div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/mohammad9729"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href=" www.linkedin.com/in/mohammad-khan-2912sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:mdk972913@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
