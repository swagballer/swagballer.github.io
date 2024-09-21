import React from 'react';
import '../styles/ContactWindow.css';
import linkedinIcon from '../assets/icons/linkedin-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import lastfmIcon from '../assets/icons/lastfm-icon.png';


const ContactWindow = () => {
  return (
    <div className="contact-content">
    <div className="contact-icons">
        <div className="contact-icon">
        <a href="https://www.linkedin.com/in/doseofsarahtonin" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
            <p>LinkedIn</p>
        </a>
        </div>
        <div className="contact-icon">
        <a href="https://www.github.com/swagballer" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
            <p>GitHub</p>
        </a>
        </div>
        <div className="contact-icon">
        <a href="https://www.last.fm/user/qwert10280" target="_blank" rel="noopener noreferrer">
            <img src={lastfmIcon} alt="Last.fm" />
            <p>Last.fm</p>
        </a>
        </div>
    </div>
    <p className="contact-description">
        You can connect with me on these platforms. I am always open to new connections and opportunities! Feel free to email me as well at doseofsarahtonin@gmail.com!
    </p>
    </div>
  );
};

export default ContactWindow;
