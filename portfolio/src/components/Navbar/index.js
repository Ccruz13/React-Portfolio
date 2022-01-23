import React from 'react';
import './nav.css';

function Navbar (props) {

    // const {
    //     contactSelected,
    //     setContactSelected
    //   } = props;

    return(
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <h2>
                <a href="/" className="navbar-logo">
                <i class="fas fa-less-than"></i>
                Charlie  /
                <i class="fas fa-greater-than"></i></a>
                </h2>
                <ul className="nav-menu">
          <li className="nav-item">
            <a className='nav-links' href='about-me' activeStyle>
              About me
            </a>
          </li>
          <li className="nav-item">
          <a className='nav-links' href='#projects' activeStyle>
              Projects
            </a>
          </li>
          <li className="nav-item">
          <a className='nav-links' href='#contact-me' activeStyle>
              Contact Me
            </a>
          </li>
          <li className="nav-item">
          <a className='nav-links' href='/resume' activeStyle>
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