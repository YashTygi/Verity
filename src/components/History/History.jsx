// components/History.js

import React from 'react';
import './History.css';

const historyItems = [
  "Environmental law developments India",
  "Electronic evidence admissibility Indian Evidence Act",
  "Constitution of India recent amendments",
  "Post-independence landmark judgments",
];

const History = () => {
  return (
    <div className="history">
      <h3>History</h3>
      <div className="history-items">
        {historyItems.map((item, index) => (
          <div key={index} className="history-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;