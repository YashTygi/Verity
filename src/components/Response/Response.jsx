import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Response.css';

const Response = ({ text, title }) => {
  return (
    <div className="response_container">
      <h1 className="response_title">{title}</h1>
      <div className="response_text">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Response;