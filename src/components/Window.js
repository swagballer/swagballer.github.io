import React from 'react';
import Draggable from 'react-draggable';
import '../styles/Window.css';
import closeIcon from '../assets/icons/close-icon.png';

const Window = ({ title, content, onClose, position }) => {
  return (
    <Draggable
      defaultPosition={{ x: position.x, y: position.y }}
      handle=".window-header"
    >
      <div className="window">
        <div className="window-header">
          <span className="window-title">{title}</span>
          <button className="close-button" onClick={onClose}>
            <img src={closeIcon} alt="Close" style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
        <div className="window-content">
          {content}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
