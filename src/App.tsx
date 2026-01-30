import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home-page/HomePage";
import SearchBrowse from './components/pages/BrowseGames/BrowseGames';
import GameDetails from "./components/pages/game-details/GameDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Registration from "./components/pages/registration/Registration";
import { type VideoGame } from "./data/video_games";
import userAvatarFallback from "./assets/user.png";
import "./App.css";

export interface UserProfileData {
  bio: string;
  avatarUrl: string;
}

function App() {
  const [visits, setVisits] = useState(0);

  const [favorites, setFavorites] = useState<VideoGame[]>([]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    bio: "This is a placeholder bio. Click edit to tell the world about your gaming habits!",
    avatarUrl: userAvatarFallback,
  });

  const toggleFavorite = (game: VideoGame) => {
    if (favorites.some((f) => f.id === game.id)) {
      setFavorites(favorites.filter((f) => f.id !== game.id));
    } else {
      setFavorites([...favorites, game]);
    }
  };

  const handleProfileUpdate = (updatedData: Partial<UserProfileData>) => {
    setUserProfile((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              isEditing={isEditingProfile}
              onToggleEdit={() => setIsEditingProfile(!isEditingProfile)}
            />
          }
        >
          <Route path="/" element={<HomePage visits={visits} setVisits={setVisits} />} />
          <Route path="/browse" element={<SearchBrowse visits={visits} setVisits={setVisits} />} />
          <Route path="/game/:id" element={<GameDetails visits={visits} setVisits={setVisits} />} />
          <Route
            path="/profile"
            element={
            <UserProfile
                visits={visits}
                setVisits={setVisits}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                user={userProfile}
                isEditing={isEditingProfile}
                onUpdateUser={handleProfileUpdate}
              />
            }
          />
          <Route path="/registration" element={<Registration visits={visits} setVisits={setVisits} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
