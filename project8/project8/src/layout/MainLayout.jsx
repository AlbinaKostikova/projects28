import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header.jsx'
import SideMenu from '../components/SideMenu.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <Header onMenuClick={openMenu} />
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}