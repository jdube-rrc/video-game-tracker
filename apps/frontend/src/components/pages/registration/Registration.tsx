import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import type { Dispatch, SetStateAction } from 'react';

type RegistrationProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
};

/**
 * Renders the account access page.
 * Successful sign-in or sign-up redirects the user to the profile page.
 *
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * @returns The Registration component.
 */
function Registration({ visits, setVisits }: RegistrationProps) {
  return (
    <section className="space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Account Access</h1>
        <p className="text-neutral-400">
          Sign in or create an account using username, email, and password, then you will be redirected to your profile page.
        </p>
      </header>

      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visits}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={() => setVisits((current) => current + 1)}
        >
          Add visit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-xl font-semibold text-white">Continue to Your Account</h2>
            <p className="text-sm text-neutral-400">
              Sign in to start building your profile!
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <SignInButton mode="modal" forceRedirectUrl="/profile" fallbackRedirectUrl="/profile">
              <button
                type="button"
                className="px-5 py-3 rounded-md border border-neutral-700 text-neutral-100 font-medium hover:bg-neutral-800"
              >
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal" forceRedirectUrl="/profile" fallbackRedirectUrl="/profile">
              <button
                type="button"
                className="px-5 py-3 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
              >
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 space-y-4">
          <h2 className="text-xl font-semibold text-white">What Happens Next</h2>
          <div className="space-y-3 text-sm text-neutral-300">
            <p>Create an account or sign in using the built-in account modal.</p>
            <p>After authentication, you will be redirected to the profile page.</p>
            <p>You can edit your username there, while email and password remain managed from your account settings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
