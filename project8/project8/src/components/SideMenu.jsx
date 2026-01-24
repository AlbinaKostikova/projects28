import { Link } from 'react-router-dom'
import facebookIcon from '../assets/images/Facebook2.svg'
import twitterIcon from '../assets/images/Twitter2.svg'
import instagramIcon from '../assets/images/Instagram2.svg'
import telegramIcon from '../assets/images/Telegram2.svg'

function SideMenu({isOpen, onClose}) {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>✕</button>
      <nav>
      <Link to="/" onClick={onClose}>На Главную</Link>
      <Link to="/first-visit" onClick={onClose}>Первый прием</Link>
      <Link to="/reviews" onClick={onClose}>Отзывы</Link>
      <Link to="/services" onClick={onClose}>Наши услуги</Link>
      <Link to="/about" onClick={onClose}>О нас</Link>
      </nav>
      <div className="side-menu__contacts">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src={facebookIcon} alt="Facebook"></img>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src={twitterIcon} alt="Twitter"></img>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src={instagramIcon} alt="Instagram"></img>
          </a>
          <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" title="Telegram">
          <img src={telegramIcon} alt="Telegram"></img>
          </a>
      </div> 
    </div>
  )
}
export default SideMenu