import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import './styling/App.scss';

function App() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <ProjectList />
        <Contact />
      </main>
    );
  }

export default App;
