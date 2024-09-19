import React, { useState, useEffect } from 'react';
import './Content.css';
import Response from '../Response/Response';
import TOC from '../TOC/TOC';
import SideBarCard from '../Sources/SideBarCard';
import useStore from '../../store/store';
import { multilingualContentData } from '../../data/content';
import { generatePDF } from '../../utils/pdfGenerator';

const Content = () => {
  const { answerPriority, language } = useStore();
  const [orderedTitles, setOrderedTitles] = useState(['RAG Based', 'Web Based', 'Case Analysis']);

  useEffect(() => {
    setOrderedTitles(prevTitles => {
      const newTitles = prevTitles.filter(title => title !== answerPriority);
      return [answerPriority, ...newTitles];
    });
  }, [answerPriority]);

  const handleDownload = () => {
    generatePDF(multilingualContentData[language], orderedTitles, language);
  };

  return (
    <div className="content_container">
      <div className="content_main_col">
        {orderedTitles.map(title => (
          <Response key={title} title={title} text={multilingualContentData[language][title]} />
        ))}
      </div>
      <div className="content_side_col">
        <TOC />
        <SideBarCard />
      </div>
      <button className="download-button" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default Content;