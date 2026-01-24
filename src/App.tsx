import Layout from './components/layout/Layout'
import GameCard from './components/common/game-card/GameCard'
import UserProfile from './components/pages/user-profile/UserProfile'
import './App.css'

function App() {
  return (
    <Layout>
      <div className="mt-8">
        <GameCard />
      </div>
      <div className="mt-8">
        <UserProfile />
      </div>
    </Layout>
  )
}

export default App
