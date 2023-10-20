import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectList from "./components/ProjectList";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
     <Navbar />
     <About />
     <ProjectList />
     <Contact />
     </main>
  );
}
