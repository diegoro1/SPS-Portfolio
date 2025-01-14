import React, {useState} from 'react';
import './Contacts.css';
import ContactForm from '../ContactForm';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contacts() {
    const [message, setMessage] = useState("");

    // fetches data from '/random-string' servlet to replace message string
    const setRandomString = async () => {
        const response = await fetch('/random-string');
        const quotes = await response.json();
        const length = Object.keys(quotes).length;

        const quote = randomQuoteGenerator(quotes, length);

        setMessage(quote);
    };

    // returns a random quote from quote object
    const randomQuoteGenerator = (quotes, length) => {
        const index = Math.floor(Math.random() * length);
        return quotes[index];
    };

    return (
        <div className="contacts-container" id="contacts">
            <Container maxWidth="md">
                <h1 className="contact-title">Contact Me</h1>
                <p className="contact-text">Let's collaborate and make the internet a prettier place.</p>
                <p className="contact-text">Find me here</p>
                <div className="contact-links">
                    <a href="https://www.instagram.com/thediegorodrigues/"><InstagramIcon className="icon" fontSize="large" style={{fill: "white"}}/></a>
                    <a href="https://www.linkedin.com/in/rodrigues-diego"><LinkedInIcon className="icon" fontSize="large" style={{fill: "white"}}/></a>
                    <a href="https://github.com/diegoro1"><GitHubIcon className="icon" fontSize="large" style={{fill: "white"}}/></a>
                </div>
                <ContactForm />
                <div className="button-container">
                    <button className="random-button" onClick={setRandomString}>Random</button>
                </div>
                <div className="message-wrapper">
                    {/* 
                        If the state of message is empty, then the div will be classless and not show
                        else, a class of "message" will be assigned and the div will be displayed 
                    */}
                    <div className={(message === "")? "" : "message"}>{message}</div>
                </div>
            </Container>
        </div>
    );
}
