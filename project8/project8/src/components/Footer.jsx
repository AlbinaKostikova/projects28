function Footer() {
  return (
    <footer className="footer">
      <div className="footer-block summary">
        <img className="logo" src="/project8/src/assets/images/photo.png.webp" alt="logo" />
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src="/project8/src/assets/images/Facebook2.svg" alt="Facebook"></img>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
          <img src="/project8/src/assets/images/Twitter2.svg" alt="Twitter"></img>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src="/project8/src/assets/images/Instagram2.svg" alt="Instagram"></img>
          </a>
          <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer" title="Telegram">
          <img src="/project8/src/assets/images/Telegram2.svg" alt="Telegram"></img>
          </a>
        </div>
        <p>© 2021 Психологический центр "ОСОЗНАННОСТЬ"<br/>Под термином «психотерапия» на сайте подразумевается психологическое консультирование. Психологи и Психотерапевты не оказывают медицинских услуг на площадке.</p>
      </div>
      <div className="footer-block clinic">
        <h4>Клиника</h4>
        <a href="">Первый прием</a>
        <a>О нас</a>
        <a>Отзывы</a>
        <a>Полезная Информация</a>
        <a>Вопрос-Ответ</a>
      </div>
      <div className="footer-block directions">
        <h4>Направления работы</h4>
        <a>Индивидуальная консультация</a>
        <a>Семейная консультация</a>
        <a>Детские и подростковые консультации</a>
        <a>Корпоративные клиенты</a>
        <a>Психодиагностика</a>
        <a>Онлайн консультация</a>
      </div>
      <div className="footer-block contacts">
        <h4>Контакты</h4>
        <p>+7 953 365 64 79</p>
        <p>home@osnclinic.ru<br/>г. Санкт-Петербург, Университетская наб., д. 25. каб. 5-1.</p>
        <p>Филиал:<br/>Санкт-Петербург, Бухарестская ул., 30 "ТЦ Континент" каб. 4-36</p>
        <a href="">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
export default Footer