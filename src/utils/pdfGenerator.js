// pdfGenerator.js
import { jsPDF } from "jspdf";

const addFormatting = (doc, text, yOffset) => {
    const lines = text.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('# ') || line.startsWith('#')) {
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(line.slice(2), 20, yOffset);
        yOffset += 10;
      } else if (line.startsWith('## ') || line.startsWith('##')) {
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(line.slice(3), 20, yOffset);
        yOffset += 8;
      } else if (line.startsWith('- ') || line.startsWith('-')) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('•', 20, yOffset);
        doc.text(line.slice(2), 25, yOffset);
        yOffset += 6;
      } else if (line.match(/^\d+\./)) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        const [number, ...rest] = line.split(' ');
        doc.text(number, 20, yOffset);
        doc.text(rest.join(' '), 30, yOffset);
        yOffset += 6;
      } else if (line.trim().startsWith('[') && line.includes('](')) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        const [linkText, url] = line.match(/\[(.?)\]\((.?)\)/).slice(1);
        doc.textWithLink(linkText, 20, yOffset, { url });
        yOffset += 6;
      } else if (line.trim()) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        const textLines = doc.splitTextToSize(line, 170);
        doc.text(textLines, 20, yOffset);
        yOffset += 6 * textLines.length;
      }
  
      if (yOffset > 280) {
        doc.addPage();
        yOffset = 20;
      }
    });
    return yOffset;
  };

const addSources = (doc, sources, language) => {
  let yOffset = 20;
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(language === 'English' ? "Sources" : "स्रोत", 20, yOffset);
  yOffset += 10;

  sources.forEach((source, index) => {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(${index + 1}. ${source.title}, 20, yOffset);
    yOffset += 6;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const descriptionLines = doc.splitTextToSize(source.description, 170);
    doc.text(descriptionLines, 20, yOffset);
    yOffset += 6 * descriptionLines.length;

    doc.textWithLink(source.link, 20, yOffset, { url: source.link });
    yOffset += 10;

    if (yOffset > 280) {
      doc.addPage();
      yOffset = 20;
    }
  });
};

export const generatePDF = (contentData, orderedTitles, language) => {
  const doc = new jsPDF();
  let yOffset = 20;

  // Add language to the first page
  doc.setFontSize(14);
  doc.setFont('helvetica', 'italic');
  doc.text(`Language: ${language}`, 20, yOffset);
  yOffset += 10;

  orderedTitles.forEach((title, index) => {
    if (index > 0) {
      doc.addPage();
      yOffset = 20;
    }
    
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 20, yOffset);
    yOffset += 10;

    const content = contentData[title];
    yOffset = addFormatting(doc, content, yOffset);
  });

  addSources(doc, contentData.Sources, language);

  doc.save(`content_${language}.pdf`);
};