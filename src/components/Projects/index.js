import React from 'react';
import CardItem from './cardItem'
import './projects.css';


function Projects() {
    return (
        <div className='cards' id='projects'>
            <h1>Check Out My Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../../photos/crypto.png')}
                            text="This is a project where I used a 3rd party api's to fetch crypto currencies live prices. 
                            The tools used to build this website were React, Material-UI, Chart.js and JavaScript."
                            path= "https://cryptowatchers.netlify.app"
                            source="https://github.com/Ccruz13/crypto"
                        />
                        <CardItem
                            src={require('../../photos/Tool.png')}
                            text='An application that lets you rent tools at a daily cost. A user can create an account, add items to their cart and checkout using a Stripe platform.
                            This application uses tools like React, CSS, MongoDB, Node.js/Express, GraphQl, and Apollo/client.'
                            path= "https://rent-a-tool.herokuapp.com/"
                            source="https://github.com/warrenp11/tool-rental"
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                            src={require('../../photos/Password.png')}
                            text='This is a password generator that uses alerts to get information on what characters a user would like to use. 
                            Then the JavaScript code would generate a password with the characters the user imputs.'
                            path= "https://ccruz13.github.io/ch-3/"
                            source="https://github.com/Ccruz13/ch-3"
                        />
                        <CardItem
                            src={require('../../photos/MVC.png')}
                            text='A blog where a user can login, logout, and create threads with a title and content where thay can say anything they want.'
                            path= "https://hidden-earth-76168.herokuapp.com/"
                            source="https://github.com/Ccruz13/MVC-Tech-Blog"
                        />
                        <CardItem
                            src={require('../../photos/books.png')}
                            text='This application can search for books leveraging the entire MERN stack.
                             Also, this application uses a React front end, MongoDB database backend, Node.js/Express.js server, GraphQL API and Apollo Server.'
                            path= "https://fathomless-headland-86134.herokuapp.com/"
                            source="https://github.com/Ccruz13/Book-Search"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Projects;