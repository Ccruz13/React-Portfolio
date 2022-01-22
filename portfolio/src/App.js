import React, {useState}from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Navbar
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <Hero />
      <Projects />
      <main>

      </main>
    </div>
  );
}

export default App;
