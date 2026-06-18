import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import ProjectPage from "./pages/Project";
import SkillsPage from "./pages/Skills";
import Footer from "./component/Footer";
import Loader from "./component/Loader";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Loader />
      <Nav />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
