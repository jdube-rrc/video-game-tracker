import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home-page/HomePage";
import SearchBrowse from "./components/pages/BrowseGames/BrowseGames";
import GameDetails from "./components/pages/game-details/GameDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Registration from "./components/pages/registration/Registration";
import { type VideoGame } from "./data/video_games";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState<VideoGame[]>([]);
  const [visits, setVisits] = useState(0);

  const toggleFavorite = (game: VideoGame) => {
    if (favorites.some((f) => f.id === game.id)) {
      setFavorites(favorites.filter((f) => f.id !== game.id));
    } else {
      setFavorites([...favorites, game]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<HomePage visits={visits} setVisits={setVisits} />}
          />
          <Route
            path="/browse"
            element={<SearchBrowse visits={visits} setVisits={setVisits} />}
          />
          <Route
            path="/game/:id"
            element={<GameDetails visits={visits} setVisits={setVisits} />}
          />
          <Route
            path="/profile"
            element={
              <UserProfile
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/registration"
            element={<Registration visits={visits} setVisits={setVisits} />}
          />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
