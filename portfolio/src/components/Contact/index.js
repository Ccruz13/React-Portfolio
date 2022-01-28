import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';
import './contact.css';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_66eqdv4', 'template_ixhtcgs', e.target, 'user_JzOFJbIBhHy10SkpfQJGc')
            .then((result) => {
                setSubmitMessage('Form has been submitted! Thank you!')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()

        console.log(formState);
    }


    return (
        <section id='contact-me'>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" defaultValue={subject} name="subject" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {submitMessage && (
                    <div>
                        <p className="submit-text">{submitMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit" >Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;