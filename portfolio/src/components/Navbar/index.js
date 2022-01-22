import React from 'react';
import './nav.css';

function Navbar (props) {

    const {
        contactSelected,
        setContactSelected
      } = props;

    return(
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <h2>
                <a href="/" className="navbar-logo">Charlie</a>
                </h2>
                <ul className="nav-menu">
          <li className="nav-item">
            <a className='nav-links' href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`${contactSelected && "nav-item"}`}>
          <a className='nav-links' href="#projects" onClick={() => setContactSelected(true)}>
              Projects
            </a>
          </li>
          <li className={`${contactSelected && "nav-item"}`}>
          <a className='nav-links' href="#contact" onClick={() => setContactSelected(true)}>
              Contact Me
            </a>
          </li>
          <li className={`${contactSelected && "nav-item"}`}>
          <a className='nav-links' href="#resume" onClick={() => setContactSelected(true)}>
              Resume
            </a>
          </li>
        </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;