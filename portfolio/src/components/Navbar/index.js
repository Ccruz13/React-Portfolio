import React from 'react';

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
                <ul className="flex-row">
          <li>
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`${contactSelected && 'navActive'}`}>
          <a href="#projects" onClick={() => setContactSelected(true)}>
              Projects
            </a>
          </li>
          <li className={`${contactSelected && 'navActive'}`}>
          <a href="#contact" onClick={() => setContactSelected(true)}>
              Contact Me
            </a>
          </li>
          <li className={`${contactSelected && 'navActive'}`}>
          <a href="#resume" onClick={() => setContactSelected(true)}>
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