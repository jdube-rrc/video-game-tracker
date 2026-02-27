import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home-page/HomePage";
import SearchBrowse from "./components/pages/BrowseGames/BrowseGames";
import GameDetails from "./components/pages/GameDetails/GameDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Registration from "./components/pages/registration/Registration";
import userAvatarFallback from "./assets/user.png";
import "./App.css";

export interface UserProfileData {
  bio: string;
  avatarUrl: string;
}

/**
 * The main application component that sets up routing and profile-editing state.
 * Shared visits/favorites state is consumed by pages through the hook-service-repository layers.
 *
 * @returns The App component.
 */
function App() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    bio: "This is a placeholder bio. Click edit to tell the world about your gaming habits!",
    avatarUrl: userAvatarFallback,
  });

  /**
   * Updates the user profile with the provided partial data.
   *
   * @param updatedData - Partial user profile data to update.
   */
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
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/browse"
            element={<SearchBrowse />}
          />
          <Route
            path="/game/:id"
            element={<GameDetails />}
          />
          <Route
            path="/profile"
            element={
              <UserProfile
                user={userProfile}
                isEditing={isEditingProfile}
                onUpdateUser={handleProfileUpdate}
              />
            }
          />
          <Route
            path="/registration"
            element={<Registration />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
