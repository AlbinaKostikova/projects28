import './Header.css'
import logoImg from "../../assets/images/photo.png.webp"

function Header({ onMenuClick }) {
  return (
    <header>
      <button onClick={onMenuClick}>☰</button>
      <img className="logo" src={logoImg} alt="logo" />
      <p className="header-phone">+7 953 365 64 79</p>
    </header>
  )
}
export default Header