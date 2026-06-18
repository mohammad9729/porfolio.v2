import React from "react";
import ProjectsSection from "../component/sections/Projects";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Project() {
  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
      </div>
      <ProjectsSection />
    </div>
  );
}
