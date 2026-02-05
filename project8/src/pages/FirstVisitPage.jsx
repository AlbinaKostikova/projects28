import firstVisitImg from '../assets/images/FirstVisit.png'
import greetingImg from '../assets/images/greeting.jpg'
import sborImg from '../assets/images/sbor.jpg'
import rabotaImg from '../assets/images/rabota.jpg'

import facebookIcon from '../assets/images/Facebook2.svg'
import twitterIcon from '../assets/images/Twitter2.svg'
import instagramIcon from '../assets/images/Instagram2.svg'
import telegramIcon from '../assets/images/Telegram2.svg'

function FirstVisitPage() {
  const errors = {}
  return (
    <div className="first-visit-page">
      <div className="fv-block1">
        <div className="fv-block1__img">
          <img src={firstVisitImg} alt="FirstVisit" />
        </div>
        <div className="fv-block1__text">
          <h3>Первый прием в клинике психологии</h3>
          <p>
            Терапия может дать очень много и кардинально поменять жизнь человека в лучшую сторону. Иногда бывает
            необходимо сформировать эту самую готовность к изменениям. 
            <br/> <p></p>
            Первая консультация, как правило, предназначена
            для взаимного знакомства вас и психолога. Какая у вас жизненная ситуация, какие трудности вызывают у вас
            тревогу и не дают возможности чувствовать себя легко и радостно.
            <br/> <p></p>
             Приходит понимание, что психолог вам
            подходит и с ним комфортно работать. Психолог же определяется с форматом работы, методами, которые будут
            подходить именно вам.
            <br/> <p></p>
             Это уникальный и индивидуальный путь. Однако самое важное, что это открытый путь. Вы
            всегда можете спросить у нашего специалиста куда вы движетесь, как и зачем. Вы включаетесь в процесс и
            понимаете что и как работает, а следовательно можете тоже влиять на процесс и результат, определять чтобы вы
            хотели оставить, а что изменить.
          </p>
        </div>
      </div>
      <div className="fv-block2">
        <h2>Как проходит первый прием психолога</h2>
        <div className="fv-cards">
          <div className="fv-card">
            <img src={greetingImg} alt="знакомство" />
            <div className="fv-card__text">
              <h3>1. Знакомство с психологом</h3>
              <p>
                Психолог узнает клиента: Вы делитесь информацией о себе, что вас беспокоит. Причина, по которой Вы
                пришли. Психолог кратко рассказывает о себе, методах своей работы. О правилах, которых он придерживается
                во время консультаций. Первая консультация - это вводная, на ней идет знакомство, определение методов
                работы и запроса клиента. Часто запросы и желаемые результаты не соответствуют реальности и на первой
                встрече их переформулируют.
              </p>
            </div>
          </div>
          <div className="fv-card">
            <img src={sborImg} alt="сбор информации" />
            <div className="fv-card__text">
              <h3>2. Сбор информации психологом</h3>
              <p>
                Встреча с психологом, как правило, ассоциируется с интервью: психолог задает вопросы, а клиент отвечает.
                На этом этапе определяются причины беспокойства. Вы рассказываете, то, что считаете нужным и что
                сподвигло вас обратиться к специалисту. Психолог детально исследует тему обращения, задавая вопросы и в
                случае необходимости, направляя разговор в нужное русло. В результате это приводит к формированию
                терапевтического альянса между клиентом и психологом, направленного на работу с запросом клиента.
                Грамотно сформулировав запрос на перемены, это то - над чем Вы будете в дальнейшем работать.
              </p>
            </div>
          </div>
          <div className="fv-card">
            <img src={rabotaImg} alt="совместная работа" />
            <div className="fv-card__text">
              <h3>3. Совместная работа с психологом</h3>
              <p>
                Очень многое зависит от степени вашего доверия к психологу. Чувствуя принятие со стороны психолога, его
                безоценочность - Вы сможете выстроить доверительные взаимоотношения со специалистом. Где возможно
                открыто говорить, получать обратную связь. Делиться своими переживаниям и быть услышанными. Это
                позволяет посмотреть на себя и ситуацию со стороны, исследовать себя, понять причины трудностей и
                изменить их вместе. Одно из самых важных в работе - это ваши взаимоотношения со специалистом, именно они
                приводят к изменениям.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fv-clock3__colored">
          <h3>Запишитесь на первый прием</h3>
          <p>свяжитесь через форму обратной связи или через контакты.</p>
        </div>
      <div className="fv-block3">
        <div className="icons-block">
          <h2>
            +7 953 365 64 79
            <br />
            home@osnclinic.ru
          </h2>
          <p>Наш адрес: Санкт-Петербург, Бухарестская ул., 30 "ТЦ Континент" каб. 4-36</p>
          <div className="icons">
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
        <form className="fv-form">
          <input className="form-name" type="text" placeholder="Ваше имя" required />
          {errors.name && <span className="error">{errors.name}</span>}
          <input className="form-phone" type="text" placeholder="+7 (000) 000-00-00" />
          {errors.phone && <span className="error">{errors.phone}</span>}
          <input className="form-email" type="email" placeholder="Email" />
          {errors.email && <span className="error">{errors.email}</span>}
          <textarea className="form-text" placeholder="Текст сообщения" />
          <select>
            Выберите формат
            <option>Очно</option>
            <option>Онлайн</option>
          </select>
          <div className="error-message open">Пожалуйста, заполните все обязательные поля Укажите, пожалуйста, имя</div>
          <button type="submit" className="form-btn">
            Записаться
          </button>
          <p>
            Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
            конфиденциальности
          </p>
        </form>
      </div>
    </div>
  )
}
export default FirstVisitPage
