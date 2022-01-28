import React, { useState } from 'react';
import './nav.css';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <h2>
            <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
              <i class="fas fa-less-than"></i>
              Charlie  /
              <i class="fas fa-greater-than"></i></a>
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
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;