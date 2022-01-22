import React from 'react';
import CardItem from './cardItem'
import './projects.css';


function Projects() {
    return (
        <div className='cards'>
            <h1>Check Out My Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../../photos/DollarFlights.png')}
                            text="This is a project we used 3rd party api's to fetch airplane tickets and a currency
                            converter. The tools used to build this website were HTML, CSS, and JavaScript."
                            path= "https://djamz919.github.io/DollarFlights/"
                        />
                        <CardItem
                            src={require('../../photos/NWA.png')}
                            text='A blog where users can create an account and post about how they are feeling or anything they may want to express.
                            Users can also comment on eachothers posts with positive words.
                            Tools we used were JavaScript, Express, Node.js, Sequelize, and Handlebars.'
                            path= "https://never-walk-alone.herokuapp.com"
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                            src={require('../../photos/Password.png')}
                            text='This is a password generator that uses alerts to get information on what characters a user would like to use. 
                            Then the JavaScript code would generate a password with the characters the user imputs.'
                            path= "https://ccruz13.github.io/ch-3/"
                        />
                        <CardItem
                            src={require('../../photos/MVC.png')}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            path= "https://hidden-earth-76168.herokuapp.com/"
                        />
                        <CardItem
                            src={require('../../photos/DollarFlights.png')}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            path= "https://djamz919.github.io/DollarFlights/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Projects;