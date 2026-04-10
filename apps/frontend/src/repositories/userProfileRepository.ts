import { userProfiles, type UserProfile } from '../data/user_profiles';

/**
 * Repository for accessing UserProfile data.
 * Abstracts all data access logic so the application doesn't need to know
 * whether data comes from test files, APIs, or databases.
 * Currently uses local test data, but can be swapped to external services later.
 */
export const userProfileRepository = {
  /**
   * Fetches all user profiles.
   *
   * @returns A promise resolving to an array of all user profiles.
   */
  getAll: async (): Promise<UserProfile[]> => {
    // Simulate network delay to match real API behavior (100ms)
    await new Promise(resolve => setTimeout(resolve, 100));
    return userProfiles;
  },

  /**
   * Fetches a single user profile by its ID.
   *
   * @param id - The unique identifier of the user profile.
   * @returns A promise resolving to the user profile, or undefined if not found.
   */
  getById: async (id: string): Promise<UserProfile | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return userProfiles.find(profile => profile.id === id);
  },

  /**
   * Creates a new user profile and adds it to the collection.
   * In a real app, this would send data to a database.
   *
   * @param profile - The user profile object to create.
   * @returns A promise resolving to the newly created profile.
   */
  create: async (profile: UserProfile): Promise<UserProfile> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    userProfiles.push(profile);
    return profile;
  },

  /**
   * Updates an existing user profile by ID.
   * In a real app, this would persist changes to a database.
   *
   * @param id - The unique identifier of the profile to update.
   * @param updates - The fields to update (partial profile data).
   * @returns A promise resolving to the updated profile, or undefined if not found.
   */
  update: async (
    id: string,
    updates: Partial<Omit<UserProfile, 'id'>>
  ): Promise<UserProfile | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const profile = userProfiles.find(p => p.id === id);
    if (!profile) return undefined;
    // Merge updates into the existing profile
    Object.assign(profile, updates);
    return profile;
  },

  /**
   * Deletes a user profile by ID.
   * In a real app, this would remove the record from the database.
   *
   * @param id - The unique identifier of the profile to delete.
   * @returns A promise resolving to true if deleted, false if not found.
   */
  delete: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const index = userProfiles.findIndex(p => p.id === id);
    if (index === -1) return false;
    userProfiles.splice(index, 1);
    return true;
  },

};
