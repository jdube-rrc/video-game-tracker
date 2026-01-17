import Header from './components/common/header/header'
import Nav from './components/common/nav/Navbar'
import GameCard from './components/GameCard'
import UserProfile from './components/user-profile/UserProfile'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <Nav />
      <div className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <Header />
        <div className="mt-8">
          <GameCard />
        </div>
        <div className="mt-8">
          <UserProfile />
        </div>
      </div>
    </div>
  )
}

export default App
