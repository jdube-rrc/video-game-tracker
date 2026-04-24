# Video Game Tracker

## Project Team
Rayn - https://github.com/Xoviax  
Jared - https://github.com/jdube-rrc  
Muse - https://github.com/muse-a-muse

### Project General Description 
User 1 : "As a user, I want to be able to add my video games to my collection,  
so that I can see what I have."  

User 2 : "As a user, I want to be able to set a completion status of a video game, so that  
I can see what my progress is for that video game."

User 3 : "As a user, I want to be able to review and rate what I have played, so that other users can see what my thoughts about the video game that I have played."

# Kanban Items

## Sprint 1

### Set up initial project structure
Jared

### Add a user profile component
Rayn

### Set up mock game data
Rayn

### Add gamecard component
Jared

### Create basic game list component with mock data
Jared

### Create header and nav components
Rayn

### Implement Tailwind
Jared

### Add basic styling and styleguide
Jared

### Prep project for Vercel deployment
Jared

## Sprint 2
### Update nav bar to properly direct users to appropriate pages
Jared

### Registration Page
Muse

### Implement shared state across pages
Muse

### Pad out mock data to support detailed game info page
Jared

### Game info page
Jared

### Update user profile component to allow user to edit it
Rayn

### Update catalogue to have a name search function
Jared

### Add favourite games component
Rayn

### Create project documentation
Jared

## Sprint 3
### Favorite Hook-Service-Repo Refactor
Jared

### UserProfile Hook-Service-Repo Refactor
Muse

### Hardware Log Hook-Service-Repo Implementation
Rayn

### Custom Hooks
All team members

### Service Layer Functionality
All team members

## Local Setup

Follow these steps to set up the Video Game Tracker application locally.

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- A [Clerk](https://clerk.com/) account for authentication
- A PostgreSQL database (e.g., [Neon](https://neon.tech/))

### 2. Environment Variables
You will need to set up environment variables for both the frontend and backend applications to connect to Clerk and your database. 

#### Clerk API Keys
To link your application to Clerk for authentication, you need to obtain your publishable and secret API keys:
1. Navigate to the [Clerk Dashboard](https://dashboard.clerk.com/) and go to **Configure > API Keys**.
2. **For the Backend**: In the "Quick Copy" section, click the framework dropdown and select **Express**. Copy the `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.
3. **For the Frontend**: Switch the "Quick Copy" dropdown framework to **React**. Copy the `VITE_CLERK_PUBLISHABLE_KEY`.

#### Backend Environment (`apps/backend/.env`)
Create a file named `.env` in the `apps/backend` directory and add the following:
```env
PORT=3001
FRONTEND_URL=http://localhost:5173

# Database configuration (Replace with your actual strings, e.g., from Neon PostgreSQL)
DATABASE_URL="<your-postgresql-connection-string>"
DIRECT_URL="<your-postgresql-direct-connection-string>"

# Clerk configuration (From the Clerk "Express" Quick Copy)
CLERK_PUBLISHABLE_KEY="<your-clerk-publishable-key>"
CLERK_SECRET_KEY="<your-clerk-secret-key>"
```

#### Frontend Environment (`apps/frontend/.env`)
Create a file named `.env` in the `apps/frontend` directory and add the following:
```env
VITE_API_BASE_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173

# Clerk configuration (From the Clerk "React" Quick Copy)
VITE_CLERK_PUBLISHABLE_KEY="<your-clerk-publishable-key>"
```
### 3. Installation
From the root directory of the project, install the dependencies for all workspaces:
```bash
npm install
```

### 4. Database Setup
Once your `DATABASE_URL` and `DIRECT_URL` are configured in the backend `.env` file, deploy the database schema using Prisma. From the root directory, run:
```bash
cd apps/backend
npx prisma migrate deploy
cd ../..
```

### 5. Running the Application
From the root directory, start both the frontend and backend development servers concurrently:
```bash
npm run dev
```

The frontend will be accessible at `http://localhost:5173` and the backend will be running at `http://localhost:3001`.
