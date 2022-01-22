import React from 'react';
import './hero.css';

function Hero (){
    return(
        <div className="hero-container">
            <video src='/videos/video.mp4' autoPlay loop muted />
            <h2>Charlie's Portfolio</h2>
            <p>Full Stack Developer</p>
        </div>
    )
}

export default Hero;