import Layout from './components/common/layout/Layout'
import GameCard from './components/GameCard'
import UserProfile from './components/user-profile/UserProfile'
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
