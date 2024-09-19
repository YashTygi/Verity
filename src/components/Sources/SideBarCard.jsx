import React, { useState } from 'react';
import './SideBarCard.css';
import { sourcesData } from './data';

const SideBarCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar-sources-list">
      <div className="sidebar-header" onClick={toggleCollapse}>
        <h2>Sources</h2>
        <span className={`sidebar-arrow ${isCollapsed ? 'collapsed' : ''}`}>▶</span>
      </div>
      <div className={`sidebar-collapsible-content ${isCollapsed ? 'collapsed' : ''}`}>
        {sourcesData.map((source, index) => (
          <div key={index} className="sidebar-source-card">
            <div className="sidebar-source-content">
              <a href="/#" className="sidebar-source-title">{source.title}</a>
              <p className="sidebar-source-description">{source.description}</p>
            </div>
            <div className="sidebar-icon">{source.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarCard;