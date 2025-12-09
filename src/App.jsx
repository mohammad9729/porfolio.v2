import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./component/Footer";


function App() {
  return (
   
     
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      
        <Nav />

      
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </main>

        <Footer />
      </div>
  
  );
}

export default App;
