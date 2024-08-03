import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

const usePageTitle = (title) => {
  const location = useLocation();

  React.useEffect(() => {
    document.title = title;
  }, [location, title]);
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;