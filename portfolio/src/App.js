import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/AboutMe';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
