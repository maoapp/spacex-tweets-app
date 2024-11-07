import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpcomingLaunches from './pages/UpcomingLaunches';
import PastLaunches from './pages/PastLaunches';
import Favorites from './pages/Favorites';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming-launches" element={<UpcomingLaunches />} />
          <Route path="/past-launches" element={<PastLaunches />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
