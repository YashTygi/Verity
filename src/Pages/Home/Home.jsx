import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecentNews from '../../components/News/RecentNews';
import History from '../../components/History/History';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate('/query'); 
      }, 2000);
    }
  };

  return (
    <div id="app-container">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-text-container">
            <div className="loading-text">
              Verity...
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header className="hide-during-loading" />
          <SearchBar onKeyDown={handleSearch} className="hide-during-loading" />
          <div className="content-section hide-during-loading">
            <RecentNews />
            <History />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;