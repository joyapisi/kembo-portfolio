import React, { Component } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Contact />
     
        <div className="App">
            <div className="App-header">
              <h2>Welcome to React.</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div> 
      </main>
    );
  }
}

export default App;
