import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

const Home = () => {
  usePageTitle('Bindle - Home');
  return <div>Home Page</div>;
};

const PrivacyPolicy = () => {
  usePageTitle('Bindle - Privacy Policy');
  return <div>Privacy Policy Page</div>;
};

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