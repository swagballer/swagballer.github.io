import React, { useState } from 'react';
import './styles/App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import { v4 as uuidv4 } from 'uuid';
import linkedinIcon from './assets/icons/linkedin-icon.png';
import githubIcon from './assets/icons/github-icon.png';
import instagramIcon from './assets/icons/instagram-icon.png';

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (title) => {
    if (!openWindows.some((window) => window.title === title)) {
      const position = { x: Math.random() * 300, y: Math.random() * 300 };
      let content = `This is the ${title} section.`;
      if (title === 'Contact') {
        content = (
          <div className="contact-content">
            <div className="contact-icons">
              <div className="contact-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
                <p>LinkedIn</p>
              </div>
              <div className="contact-icon">
                <img src={githubIcon} alt="GitHub" />
                <p>GitHub</p>
              </div>
              <div className="contact-icon">
                <img src={instagramIcon} alt="Instagram" />
                <p>Instagram</p>
              </div>
            </div>
            <p className="contact-description">
              You can reach out to me on these platforms. I am always open to new connections and opportunities! Feel free to email me as well at doseofsarahtonin@gmail.com!
            </p>
          </div>
        );
      }
  
      setOpenWindows([
        ...openWindows,
        { id: uuidv4(), title, content, position },
      ]);
    }
  };
  

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter((window) => window.id !== id));
  };

  return (
    <div className="App">
      <Desktop openWindow={openWindow} />
      {openWindows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          content={window.content}
          position={window.position}
          onClose={() => closeWindow(window.id)}
        />
      ))}
    </div>
  );
}

export default App;
