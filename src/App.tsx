import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/home-page/HomePage';
import SearchBrowse from './components/pages/BrowseGames/BrowseGames';
import GameDetails from './components/pages/game-details/GameDetails';
import UserProfile from './components/pages/UserProfile/UserProfile';
import Registration from './components/pages/registration/Registration';
import './App.css';

function App() {
  const [visits, setVisits] = useState(0);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage visits={visits} setVisits={setVisits} />} />
        <Route path="/browse" element={<SearchBrowse visits={visits} setVisits={setVisits} />} />
        <Route path="/game/:id" element={<GameDetails visits={visits} setVisits={setVisits} />} />
        <Route path="/profile" element={<UserProfile visits={visits} setVisits={setVisits} />} />
        <Route path="/registration" element={<Registration visits={visits} setVisits={setVisits} />} />
      </Route>
    </Routes>
  );
}

export default App;
