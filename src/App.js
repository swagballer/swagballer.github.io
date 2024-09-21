import React, { useState } from 'react';
import './styles/App.css';
import Desktop from './components/Desktop';
import Window from './components/Window';
import AboutWindow from './components/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow';
import ContactWindow from './components/ContactWindow';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (title) => {
    if (!openWindows.some((window) => window.title === title)) {
      const position = { x: Math.random() * 300, y: Math.random() * 300 };
      let content;
      switch (title) {
        case 'About':
          content = <AboutWindow />;
          break;
        case 'Projects':
          content = <ProjectsWindow />;
          break;
        case 'Contact':
          content = <ContactWindow />;
          break;
        default:
          content = <div>Unknown Window</div>;
      }

      setOpenWindows([...openWindows, { id: uuidv4(), title, content, position }]);
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
