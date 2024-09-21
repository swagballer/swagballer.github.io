import React from 'react';
import '../styles/AppIcon.css';


const AppIcon = ({ title, icon, onClick, style }) => {
  return (
    <div className="app-icon" onClick={onClick} style={style}>
      <img src={icon} alt={title} className="icon" />
      <div className=".hvr-pulse-grow">
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default AppIcon;
