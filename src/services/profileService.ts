import { userProfileRepository } from '../repositories/userProfileRepository';
import type { UserProfile } from '../data/user_profiles';

/**
 * Service that handles business logic for user profile operations.
 * Acts as a middleman between components/hooks and the repository,
 * allowing for validation, transformation, or other business rules before
 * data is accessed or stored.
 */
export const profileService = {
  /**
   * Retrieves all user profiles from the repository.
   *
   * @returns A promise resolving to an array of all user profiles.
   */
  getAll: async (): Promise<UserProfile[]> => {
    return userProfileRepository.getAll();
  },

  /**
   * Retrieves a single user profile by ID.
   *
   * @param id - The unique identifier of the user profile.
   * @returns A promise resolving to the user profile, or undefined if not found.
   */
  getById: async (id: number): Promise<UserProfile | undefined> => {
    return userProfileRepository.getById(id);
  },

  /**
   * Creates a new user profile with the provided data.
   * This is the service layer that components should call when registering.
   *
   * @param profile - The user profile data to create (without ID).
   * @returns A promise resolving to the newly created profile with an assigned ID.
   */
  create: async (profile: Omit<UserProfile, 'id'>): Promise<UserProfile> => {
    // In the future, you could add business logic here:
    // - Validate email uniqueness
    // - Hash passwords
    // - Send welcome emails
    // - Create audit logs
    return userProfileRepository.create(profile);
  },

  /**
   * Updates an existing user profile.
   *
   * @param id - The unique identifier of the profile to update.
   * @param updates - The fields to update.
   * @returns A promise resolving to the updated profile, or undefined if not found.
   */
  update: async (
    id: number,
    updates: Partial<Omit<UserProfile, 'id'>>
  ): Promise<UserProfile | undefined> => {
    return userProfileRepository.update(id, updates);
  },

  /**
   * Deletes a user profile by ID.
   *
   * @param id - The unique identifier of the profile to delete.
   * @returns A promise resolving to true if deleted, false if not found.
   */
  delete: async (id: number): Promise<boolean> => {
    return userProfileRepository.delete(id);
  },
};
