import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'

import HomePage from './pages/HomePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import MemberPage from './pages/MemberPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import FirstVisitPage from './pages/FirstVisitPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/member/:id" element={<MemberPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/first-visit" element={<FirstVisitPage />} />
      </Route>
    </Routes>
  )
}

export default App
