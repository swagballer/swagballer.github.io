import React from 'react';
import AppIcon from './AppIcon';
import '../styles/Desktop.css';

import aboutIcon from '../assets/icons/about-icon.png';
import projectsIcon from '../assets/icons/projects-icon.png';
import contactIcon from '../assets/icons/contact-icon.png';

const Desktop = ({ openWindow }) => {
  return (
    <div className="desktop">
      <AppIcon 
        title="About" 
        icon={aboutIcon}
        onClick={() => openWindow('About')} 
        style={{ top: '20px', left: '20px', position: 'absolute' }} 
      />
      <AppIcon 
        title="Projects" 
        icon={projectsIcon} 
        onClick={() => openWindow('Projects')} 
        style={{ top: '20px', left: '140px', position: 'absolute' }} 
      />
      <AppIcon 
        title="Contact" 
        icon={contactIcon} 
        onClick={() => openWindow('Contact')} 
        style={{ top: '20px', left: '260px', position: 'absolute' }}
      />
    </div>
  );
};

export default Desktop;