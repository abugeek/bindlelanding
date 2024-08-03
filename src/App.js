import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {usePageTitle('Bindle - Home')}
              <Home />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              {usePageTitle('Bindle - Privacy Policy')}
              <PrivacyPolicy />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;