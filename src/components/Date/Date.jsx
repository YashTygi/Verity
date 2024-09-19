import React, { useState, useEffect } from 'react';
import './Date.css';

const DateDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      const dateString = dateFormatter.format(now);
      const timeString = timeFormatter.format(now);

      setCurrentDateTime(`${dateString} ${timeString}`);
    };

    updateDateTime(); // Initial update
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-display">
      <p className="date-value">{currentDateTime}</p>
    </div>
  );
};

export default DateDisplay;