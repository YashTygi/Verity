import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Query from './Pages/Query/Query';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;