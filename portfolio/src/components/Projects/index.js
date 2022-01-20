import React from 'react';


function Projects() {
    return (
        <div className='cards'>
            <h1>Check Out My Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                        <a href="https://djamz919.github.io/DollarFlights/">Dollar Flights</a>
                        <img
                            className='DollarFlights_img'
                            alt='DollarFlights image'
                            src={require('../../photos/DollarFlights.png')}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Projects;