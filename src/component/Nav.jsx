import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When changing route, scroll to top unless it's a hash redirect
  useEffect(() => {
    setIsOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  // Scroll spy IntersectionObserver
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in active viewing zone
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/", hash: "home" },
    { label: "About", path: "/", hash: "about" },
    { label: "Skills", path: "/skills", hash: "skills" },
    { label: "Experience", path: "/", hash: "experience" },
    { label: "Projects", path: "/project", hash: "projects" },
    { label: "Contact", path: "/", hash: "contact" },
  ];

  const handleLinkClick = (e, link) => {
    if (location.pathname === "/" && link.path === "/") {
      e.preventDefault();
      const element = document.getElementById(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link.path === "/") {
      e.preventDefault();
      navigate(`/#${link.hash}`);
    }
  };

  const isLinkActive = (link) => {
    if (location.pathname === "/") {
      return activeSection === link.hash;
    }
    // If on a sub-page, highlight only the specific sub-page links
    return location.pathname === link.path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-slate-950/80 backdrop-blur-md border-b border-gray-800/80 py-3 shadow-lg" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-white tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-black group-hover:scale-105 transition-transform">
              <Terminal size={16} />
            </div>
            <span>Mohammad Khan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => {
              const active = isLinkActive(link);
              return (
                <a
                  key={i}
                  href={link.path === "/" ? `#${link.hash}` : link.path}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-sm font-medium transition-colors hover:text-white relative py-1 ${
                    active ? "text-cyan-400 font-semibold" : "text-gray-400"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span 
                      layoutId="activeIndicator" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-800 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link);
                return (
                  <a
                    key={i}
                    href={link.path === "/" ? `#${link.hash}` : link.path}
                    onClick={(e) => {
                      handleLinkClick(e, link);
                      setIsOpen(false);
                    }}
                    className={`block text-base font-semibold py-2 transition-colors ${
                      active ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
