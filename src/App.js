import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home'; // Assuming Home component is in the components folder
import PrivacyPolicy from './pages/PrivacyPolicy'; // Assuming PrivacyPolicy component is in the components folder

function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;