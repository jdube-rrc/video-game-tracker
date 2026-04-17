import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/home-page/HomePage";
import SearchBrowse from "./components/pages/BrowseGames/BrowseGames";
import GameDetails from "./components/pages/GameDetails/GameDetails";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Registration from "./components/pages/registration/Registration";
import PlatformHardwareLog from "./components/pages/PlatformHardwareLog/PlatformHardwareLog";
import userAvatarFallback from "./assets/user.png";
import "./App.css";
import { useVisits } from "./hooks/useVisits/useVisits";
import { useFavorites } from "./hooks/useFavorites/useFavorites";
import { getBioError, isProfileValid, truncateBio } from "./services/profileService";

export interface UserProfileData {
  username: string;
  email: string;
  bio: string;
  avatarUrl: string;
  avatarFile: File | null;
}

const DEFAULT_PROFILE_BIO = "This is a placeholder bio. Click edit to tell the world about your gaming habits!";

function buildUserProfile(user: ReturnType<typeof useUser>["user"]): UserProfileData {
  const metadataBio = user?.unsafeMetadata?.bio;

  return {
    username: user?.username ?? user?.firstName ?? user?.fullName ?? "",
    email: user?.primaryEmailAddress?.emailAddress ?? "",
    bio: typeof metadataBio === "string" && metadataBio.trim().length > 0 ? metadataBio : DEFAULT_PROFILE_BIO,
    avatarUrl: user?.imageUrl ?? userAvatarFallback,
    avatarFile: null,
  };
}

/**
 * The main application component that sets up routing and shared state,
 * including a visits counter, favorite games list, and user profile data.
 *
 * @returns The App component.
 */
function App() {
  const { isSignedIn, user } = useUser();
  const { visitCount, setVisitCount } = useVisits();

  const { favorites, toggleFavorite } = useFavorites();

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSaveError, setProfileSaveError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData>(() => buildUserProfile(user));

  /**
   * Updates the user profile with the provided partial data.
   *
   * @param updatedData - Partial user profile data to update.
   */
  const handleProfileUpdate = (updatedData: Partial<UserProfileData>) => {
    setProfileSaveError(null);
    setUserProfile((prev) => ({ ...prev, ...updatedData }));
  };

  useEffect(() => {
    if (!isSignedIn || !user || isEditingProfile) {
      return;
    }

    setUserProfile(buildUserProfile(user));
  }, [isEditingProfile, isSignedIn, user]);

  const handleProfileEditToggle = async () => {
    if (!isSignedIn || !user) {
      return;
    }

    if (!isEditingProfile) {
      setProfileSaveError(null);
      setUserProfile(buildUserProfile(user));
      setIsEditingProfile(true);
      return;
    }

    if (!isProfileValid(userProfile.bio)) {
      setProfileSaveError(getBioError(userProfile.bio) ?? 'Profile data is invalid.');
      return;
    }

    setIsSavingProfile(true);
    setProfileSaveError(null);

    try {
      await user.update({
        username: userProfile.username.trim() || null,
        unsafeMetadata: {
          ...user.unsafeMetadata,
          bio: truncateBio(userProfile.bio),
        },
      });

      if (userProfile.avatarFile) {
        await user.setProfileImage({ file: userProfile.avatarFile });
      }

      const refreshedUser = await user.reload();
      setUserProfile(buildUserProfile(refreshedUser));
      setIsEditingProfile(false);
    } catch {
      setProfileSaveError('Failed to save profile changes.');
    } finally {
      setIsSavingProfile(false);
    }
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              isEditing={isEditingProfile}
              isSaving={isSavingProfile}
              onToggleEdit={handleProfileEditToggle}
            />
          }
        >
          <Route
            path="/"
            element={
              <HomePage visits={visitCount} setVisits={setVisitCount} />
            }
          />
          <Route
            path="/browse"
            element={
              <SearchBrowse
                visits={visitCount}
                setVisits={setVisitCount}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/game/:id"
            element={
              <GameDetails
                visits={visitCount}
                setVisits={setVisitCount}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/profile"
            element={
              isSignedIn ? (
                <UserProfile
                  visits={visitCount}
                  setVisits={setVisitCount}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  user={userProfile}
                  isSaving={isSavingProfile}
                  isEditing={isEditingProfile}
                  saveError={profileSaveError}
                  onUpdateUser={handleProfileUpdate}
                />
              ) : (
                <Navigate to="/registration" replace />
              )
            }
          />
          <Route
            path="/registration"
            element={
              isSignedIn ? (
                <Navigate to="/profile" replace />
              ) : (
                <Registration visits={visitCount} setVisits={setVisitCount} />
              )
            }
          />
          <Route path="/hardware-logs" element={<PlatformHardwareLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
