/**
 * Profile service for user profile validation and utilities.
 */

/**
 * Maximum allowed length for user bio.
 */
export const MAX_BIO_LENGTH = 500;

/**
 * Maximum file size for avatar upload in bytes (2MB).
 */
export const MAX_AVATAR_SIZE = 2 * 1024 * 1024;

/**
 * Allowed image types for avatar upload.
 */
export const ALLOWED_AVATAR_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

/**
 * Validates the user's bio and returns an error message if invalid.
 * 
 * @param bio - The bio string to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getBioError(bio: string): string | undefined {
  if (bio.length > MAX_BIO_LENGTH) {
    return `Bio must be ${MAX_BIO_LENGTH} characters or less.`;
  }
  return undefined;
}

/**
 * Validates an avatar file and returns an error message if invalid.
 * 
 * @param file - The file to validate.
 * @returns An error message if invalid, or undefined if valid.
 */
export function getAvatarError(file: File): string | undefined {
  if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
    return 'Please upload a valid image (JPEG, PNG, GIF, or WebP).';
  }
  if (file.size > MAX_AVATAR_SIZE) {
    return 'Image must be 2MB or smaller.';
  }
  return undefined;
}

/**
 * Reads an image file and converts it to a data URL.
 * 
 * @param file - The image file to read.
 * @returns A promise that resolves with the data URL string.
 */
export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as data URL.'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

/**
 * Truncates a bio to the maximum allowed length.
 * 
 * @param bio - The bio string to truncate.
 * @returns The truncated bio string.
 */
export function truncateBio(bio: string): string {
  return bio.slice(0, MAX_BIO_LENGTH);
}

/**
 * Checks if the profile data is valid for saving.
 * 
 * @param bio - The bio to validate.
 * @returns True if the profile is valid (no errors).
 */
export function isProfileValid(bio: string): boolean {
  return !getBioError(bio);
}
