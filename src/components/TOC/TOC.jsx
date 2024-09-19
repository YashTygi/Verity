import React from 'react';
import './TOC.css';
import useStore from '../../store/store';

const TOC = () => {
  const { answerPriority, setAnswerPriority } = useStore();

  const handleTitleClick = (title) => {
    setAnswerPriority(title);
  };

  const titles = ['RAG Based', 'Web Based', 'Case Analysis'];

  return (
    <div className="toc_container">
      {titles.map((title) => (
        <div
          key={title}
          className={`toc_item ${answerPriority === title ? 'selected' : ''}`}
          onClick={() => handleTitleClick(title)}
        >
          <p className="toc_title">{title}</p>
          <div className="toc_line"></div>
        </div>
      ))}
    </div>
  );
};

export default TOC;