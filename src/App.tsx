import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
