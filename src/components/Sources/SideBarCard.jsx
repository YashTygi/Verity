import React, { useState } from 'react';
import './SideBarCard.css'; 
import {sourcesData} from './data'


const SideBarCard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false); 

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); 
    };
  return (
    <div className="sources-list">

      <div className="header" onClick={toggleCollapse}> 
        <h2>Sources</h2>
        <span className={`arrow ${isCollapsed ? 'collapsed' : ''}`}> 
          &#x25B6;
        </span>
      </div>
      
        <div className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        {sourcesData.map((source, index) => (
          <div className="source-card" key={index}>
            <span className="icon">{source.icon}</span>
            <div className="source-content">
              <a href={source.link} className="source-title" target="_blank" rel="noopener noreferrer">{source.title}</a>
              <p className="source-description">{source.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SideBarCard;
