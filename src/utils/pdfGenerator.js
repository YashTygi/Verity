// pdfGenerator.js
import { jsPDF } from "jspdf";

const addFormatting = (doc, text, yOffset) => {
  // ... (keep the existing addFormatting function)
};

const addSources = (doc, sources, language) => {
  let yOffset = 20;
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(language === 'English' ? "Sources" : "स्रोत", 20, yOffset);
  yOffset += 10;

  sources.forEach((source, index) => {
    // ... (keep the existing source formatting)
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