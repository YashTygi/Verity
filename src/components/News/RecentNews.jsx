import React from 'react';
import './RecentNews.css';

const newsItems = [
  {
    title: "Some Explanation Expected From Registry When Case Isn't Listed...",
    imageUrl: "https://picsum.photos/seed/court1/300/200",
    link: "https://www.livelaw.in/top-stories/supreme-court-some-explanation-expected-from-registry-when-case-isnt-listed-despite-directions-226734"
  },
  {
    title: "Supreme Court files complaint against social media handle wh...",
    imageUrl: "https://picsum.photos/seed/judge1/300/200",
    link: "https://www.livelaw.in/top-stories/supreme-court-files-complaint-against-social-media-handle-which-made-allegations-against-cji-dy-chandrachud-226727"
  },
  {
    title: "Reconsider compulsory attendance requirement in c...",
    imageUrl: "https://picsum.photos/seed/classroom1/300/200",
    link: "https://www.livelaw.in/news-updates/delhi-high-court-asks-bar-council-of-india-to-reconsider-compulsory-attendance-requirement-226721"
  },
  {
    title: "Gujarat High Court calls for limited internet access to prison...",
    imageUrl: "https://picsum.photos/seed/prison1/300/200",
    link: "https://www.livelaw.in/news-updates/gujarat-high-court-calls-for-limited-internet-access-to-prisoners-for-legal-aid-226718"
  },
  {
    title: "Delhi High Court convicts lawyer who came to court drunk, thre...",
    imageUrl: "https://picsum.photos/seed/lawyer1/300/200",
    link: "https://www.livelaw.in/news-updates/delhi-high-court-convicts-lawyer-who-came-to-court-drunk-threatened-judge-226715"
  },
  {
    title: "Why Delhi court ordered release of Kashmiri separatist Shabir...",
    imageUrl: "https://picsum.photos/seed/court2/300/200",
    link: "https://www.livelaw.in/news-updates/why-delhi-court-ordered-release-of-kashmiri-separatist-shabir-shah-in-terror-funding-case-226709"
  },
  {
    title: "Zee and Sony Pictures reach merger settlement; agre...",
    imageUrl: "https://picsum.photos/seed/media1/300/200",
    link: "https://www.livelaw.in/news-updates/zee-and-sony-pictures-reach-merger-settlement-agree-to-withdraw-cases-226706"
  },
  {
    title: "Delhi High Court asks Chief Secretary to decide BJP's alle...",
    imageUrl: "https://picsum.photos/seed/court3/300/200",
    link: "https://www.livelaw.in/news-updates/delhi-high-court-asks-chief-secretary-to-decide-bjps-allegations-against-aap-govt-226703"
  },
  {
    title: "This Bombay High Court judge recused from Sachin Waze cas...",
    imageUrl: "https://picsum.photos/seed/judge2/300/200",
    link: "https://www.livelaw.in/news-updates/bombay-high-court-judge-recuses-from-sachin-waze-case-citing-personal-reasons-226700"
  },
  {
    title: "Patna High Court grants bail to ISKCON monk from Nigeria acc...",
    imageUrl: "https://picsum.photos/seed/court4/300/200",
    link: "https://www.livelaw.in/news-updates/patna-high-court-grants-bail-to-iskcon-monk-from-nigeria-accused-of-violating-visa-norms-226697"
  },
];

const RecentNews = () => {
  return (
    <div className="recent-news">
      <h2>Recent News</h2>
      <div className="news-container">
        {newsItems.map((item, index) => (
          <a 
            key={index} 
            className="news-item" 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="news-item-image">
              <img src={item.imageUrl} alt={`News ${index + 1}`} />
            </div>
            <div className="news-item-text">
              <p>{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;