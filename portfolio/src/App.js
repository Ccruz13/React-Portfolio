import React, {useState}from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer'

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
      <main>

      </main>
    </div>
  );
}

export default App;
