import React from 'react';
import '../styles/AppIcon.css';


const AppIcon = ({ title, icon, onClick, style }) => {
  return (
    <div className="app-icon" onClick={onClick} style={style}>
      <img src={icon} alt={title} className="icon" />
      <span className="title">{title}</span>
    </div>
  );
};

export default AppIcon;
