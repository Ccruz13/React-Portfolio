import React from 'react';
import './about.css';
import gif from '../../photos/coding.gif'

function About() {
    return (
        <div className="about" id="about-me">
            <h1>About Me</h1>
            <div className="about__container">
                <div className="about-me-text">
                    <p>I am a creative and enthusiastic individual that has a great work ethic and always likes to learn something new. 
                        I have grown a love for development, I enjoy problem solving and making the UI of a page POP. I attended the coding bootcamp of Rutgers University. 
                        I live in Paterson, NJ and in my free time i enjoy going to the gym, playing baseball, and being outdoors.</p>
                </div>
                <div className="about-me-icons">
                <img className="coding-gif" src={gif} alt="coding gif" />
                </div>
            </div>
        </div>
    )
}

export default About;