import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
       
        <h2 className="text-4xl font-bold text-white mb-12 tracking-wide">
          Contact <span className="text-cyan-400"> Me </span>
        </h2>

        
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 backdrop-blur-md border border-gray-700 rounded-xl shadow-xl p-10 space-y-8 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-center gap-4 text-gray-300 hover:text-white transition">
            <FaEnvelope className="text-white-400 text-2xl" />
            <a href="mailto:mdk972913@gmail.com" className="text-lg font-medium">
              mdk972913@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-300 hover:text-white transition">
            <FaPhone className="text-indigo-400 text-2xl" />
            <a href="tel:+917387006733" className="text-lg font-medium">
              +91 7387006733
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-300 hover:text-white transition">
            <FaMapMarkerAlt className="text-indigo-400 text-2xl" />
            <span className="text-lg font-medium">Pune, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

