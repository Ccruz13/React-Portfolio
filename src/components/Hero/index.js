import React from 'react';
import './hero.css';
import video from '../../videos/video.mp4'

function Hero (){
    return(
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h2>Charlie's Portfolio</h2>
            <p>Full Stack Developer</p>
        </div>
    )
}

export default Hero;