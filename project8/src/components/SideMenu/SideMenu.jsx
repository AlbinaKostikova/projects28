import './SideMenu.css'
import { Link } from 'react-router-dom'
import facebookIcon from '../../assets/images/Facebook2.svg'
import twitterIcon from '../../assets/images/Twitter2.svg'
import instagramIcon from '../../assets/images/Instagram2.svg'
import telegramIcon from '../../assets/images/Telegram2.svg'

function SideMenu({ isOpen, onClose }) {
  return (
    <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>✕</button>
      <nav>
        <Link to="/" onClick={onClose}>На Главную</Link>
        <Link to="/first-visit" onClick={onClose}>Первый прием</Link>
        <Link to="/favorites" onClick={onClose}>Избранные доктора</Link>
        <Link to="/team" onClick={onClose}>Наша команда</Link>
      </nav>
      <div className="sideMenuContacts">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" title="Telegram">
          <img src={telegramIcon} alt="Telegram" />
        </a>
      </div>
    </div>
  )
}

export default SideMenu
