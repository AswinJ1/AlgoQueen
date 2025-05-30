import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SelectionCriteriaPage from './pages/SelectionCriteriaPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectioncriteria" element={<SelectionCriteriaPage />} />
        {/* Redirect hash routes to home page */}
        <Route path="/:section" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
