import React from 'react';
import './LanguageDropDown.css';
import useStore from '../../store/store';

const LanguageDropDown = () => {
    const { language, setLanguage } = useStore();
    
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="language-dropdown-container">
            <label htmlFor="language" className="language-label">Language:</label>
            <div className="select-wrapper">
                <select 
                    name="language" 
                    id="language" 
                    value={language} 
                    onChange={handleLanguageChange}
                    className="language-select"
                >
                    <option value="English">English</option>
                    <option value="हिन्दी">हिन्दी</option>
                    <option value="मराठी">मराठी</option>
                    <option value="தமிழ்">தமிழ்</option>
                </select>
            </div>
        </div>
    );
};

export default LanguageDropDown;
