import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-gray-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo and Credits */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">Mohammad Khan</span>
            <p className="text-xs text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohammad9729"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mohammad-khan-2912sk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:mdk972913@gmail.com"
              className="p-2.5 bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* Built with details & Back to top */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span>Built with React & Tailwind</span>
              <Heart size={10} className="text-rose-500 animate-pulse" />
            </div>
            <button 
              onClick={handleScrollTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
