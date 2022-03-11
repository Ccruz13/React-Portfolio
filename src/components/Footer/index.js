import React from 'react';
import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-wrap'>
                <div className='footer-logo'>
                    <a href='https://ccruz13.github.io/React-Portfolio/' rel="noopener noreferrer" className='social-logo'>
                        <i className="fas fa-less-than"></i>
                        Charlie  /
                        <i className="fas fa-greater-than"></i>
                    </a>
                </div>
                <small className='website-rights'>Charlie © 2022</small>
                <div className='social-icons'>
                    <a
                        className='social-icon-link'
                        href='https://www.linkedin.com/in/charlie-cruz-a31ab2225'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </a>
                    <a
                        className='social-icon-link'
                        href="https://github.com/Ccruz13"
                        rel="noopener noreferrer"
                        target='_blank'
                        aria-label='GitHub'
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;