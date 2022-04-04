import React from 'react';
import './hero.css';
import video from '../../videos/video.mp4'
import Typical from 'react-typical'

function Hero (){
    return(
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h2>Hi, my name is Charlie</h2>
            <p>
                <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                    'I am a Full-Stack Developer', 2000,
                    'I am Creative', 2000,
                    'I love to Develop', 2000
                ]}
                />
            </p>
            <h4>Welcome to my site!</h4>
        </div>
    )
}

export default Hero;