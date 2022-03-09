import React from 'react';
import './about.css';
import gif from '../../photos/coding.gif'

function About() {
    return (
        <div className="about" id="about-me">
            <h1>About Me</h1>
            <div className="about__container">
                <div className="about-me-text">
                    <p>Hello, my name is Charlie and I enjoy creating things that live on the internet. I am a full stack developer that attended the school of  Rutgers University coding boot camp.
                        I am located in Paterson, NJ. I can work with all the qualities of a MERN stack. However, I enjoy spending more of my time focused on the front end in React.
                        I have grown to enjoy building apps using react, mongoDB, and graphQL, but I also enjoy learning new libraries and tech that I can incorporate in my work.</p>
                    <p>Here is a few technologies I have recently worked with:</p>
                    <ul className="skill-list">
                        <li>JavaScript(ES6+)</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div className="about-me-icons">
                    <img className="coding-gif" src={gif} alt="coding gif" />
                </div>
            </div>
        </div>
    )
}

export default About;