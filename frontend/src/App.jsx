import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SelectionCriteriaPage from './pages/SelectionCriteriaPage.jsx';
import Board from './pages/Board';

import ArchiveHomePage2025 from './archive/2025/pages/HomePage';
import ArchiveBoard2025 from './archive/2025/pages/Board';
import WinnersPage from './pages/Winners';
import RegisterLeaderPage from './pages/RegisterLeaderPage';
import ResourcesPage from './pages/Resources';
import Speakerpage from './pages/Speakerpage';
import Schedule from './pages/Schedule';
import PricePage from './pages/PricePage';
import QuestPage from './pages/QuestPage';
import QuestLeaderboardPage from './pages/QuestLeaderboardPage';
import PrizeLeaderboardpage from './pages/PrizeLeadeboardPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/learning-resources" element={<ResourcesPage />} />
        <Route path="/quest-about" element={<QuestPage />} />
        <Route path="/quest-leaderboard" element={<QuestLeaderboardPage />} />
        <Route path="/prizes" element={<PricePage />} />
        <Route path="/prize-leaderboard" element={<PrizeLeaderboardpage/>}/>

        {/* <Route path="/speakers" element={<Speakerpage />} /> */}
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/leaderboard" element={<Board />} />
        {/* <Route path="/ranklist" element={<SelectionCriteriaPage />} /> */}
        <Route path="/institute_leaderboard" element={<RegisterLeaderPage />} />
        {/* Archive routes */}
        <Route path="/archive/2025" element={<ArchiveHomePage2025 />} />
        <Route path="/archive/2025/leaderboard" element={<ArchiveBoard2025 />} />
        {/* Redirect hash routes to home page */}
        <Route path="/:section" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
