// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onKeyDown }) => {  // Ensure onKeyDown is passed correctly
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="search-container">
      <h2 className="greeting">
        Good morning, <span className="highlight">Yash!</span>
      </h2>
      <div className="search-box">
        <textarea
          className="search-input"
          rows="1"
          cols="30"
          type="text"
          placeholder="What are you looking for?"
          onKeyDown={onKeyDown} // Trigger the onKeyDown function
        />
        <div className="sources-dropdown">
          <label>Sources:</label>
          <select>
            <option value="all">All</option>
            <option value="news">News</option>
            <option value="cases">Cases</option>
          </select>
        </div>
        <div className="case-analysis-toggle">
          <div className="slider-container">
            <input
              id="case-analysis-checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleToggleChange}
              className="slider-checkbox"
            />
            <span className="slider"></span>
          </div>
          <label htmlFor="case-analysis-checkbox">Case Analysis</label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;  // Ensure default export