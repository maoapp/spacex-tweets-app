import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpcomingLaunches from './pages/UpcomingLaunches';
import PastLaunches from './pages/PastLaunches';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/upcoming-launches" element={<UpcomingLaunches />} />
          <Route path="/past-launches" element={<PastLaunches />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
