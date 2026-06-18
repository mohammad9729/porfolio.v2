import React from "react";
import Hero from "../component/sections/Hero";
import About from "../component/sections/About";
import Skills from "../component/sections/Skills";
import Experience from "../component/sections/Experience";
import Projects from "../component/sections/Projects";
import Contact from "../component/sections/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
