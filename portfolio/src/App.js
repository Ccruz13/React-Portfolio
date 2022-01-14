import React, {useState}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/AboutMe';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Navbar
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>

      </main>
    </div>
  );
}

export default App;
