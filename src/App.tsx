import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/home-page/HomePage';
import SearchBrowse from './components/pages/search-browse/SearchBrowse';
import GameDetails from './components/pages/game-details/GameDetails';
import UserProfile from './components/pages/user-profile/UserProfile';
import Registration from './components/pages/registration/Registration';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<SearchBrowse />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
