import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  /**
   * PLEASE READ: Missing Clerk Publishable Key in .env file.
   * To enable Auth:
   * 1. Add VITE_CLERK_PUBLISHABLE_KEY to apps/frontend/.env
   * 2. This will trigger the conditional ClerkProvider wrapping below.
   */
  console.warn("Missing Clerk Publishable Key in .env file. Auth features will be disabled.")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <App />
    )}
  </StrictMode>,
)

