import React, { useState } from 'react';
import './nav.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <h2>
            <a href="https://ccruz13.github.io/React-Portfolio/" className="navbar-logo" onClick={closeMobileMenu}>
              <i className="fas fa-less-than"></i>
              Charlie  /
              <i className="fas fa-greater-than"></i></a>
          </h2>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a className='nav-links' href='#about-me' onClick={closeMobileMenu} activeStyle>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className='nav-links' href='#projects' onClick={closeMobileMenu} activeStyle>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className='nav-links' href='#contact-me' onClick={closeMobileMenu} activeStyle>
                Contact Me
              </a>
            </li>
            <li id="resume">
            <a className="resume-button" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:3a15dba1-9e20-4214-8d0b-addd8c92d57b" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;