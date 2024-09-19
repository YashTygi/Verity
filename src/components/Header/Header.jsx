// components/Header.js

import React, { useRef } from 'react';
import './Header.css';

const Header = () => {
  const fileInputRef = useRef(null);

  const handleAddResourcesClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can handle the file upload here
    }
  };

  return (
    <header className="header">
      <div className="brand-name">Verity</div>
      <div className="header-right">
        <button className="add-resources-button" onClick={handleAddResourcesClick}>
          +
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the file input
        />
        <div className="profile-section">
          <div className="profile-icon">
            <img src="https://i.pravatar.cc/300" alt="Profile" />
          </div>
          <div className="profile-name">Yash</div>
        </div>
      </div>
    </header>
  );
};

export default Header;