import { useParams } from 'react-router-dom'
import team from '../data/team'

function MemberPage() {
  const { id } = useParams()
  const member = team.find(item => item.id === id)

  if (!member) return <h2>Специалист не найден</h2>

  return (
    <div className="member-page">
      <div className="member-card">
        <img src={member.image} alt={member.name} />
        <div className="member-info">
          <h2>{member.name}</h2>

          {member.positions?.length > 0 && (
            <ul className="member-positions">
              {(member.positions || []).map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          )}

          {member.prices?.length > 0 && (
            <div className="member-prices">
              {(member.prices || []).map((price, i) => <p key={i}>{price}</p>)}
            </div>
          )}

          {member.education?.length > 0 && (
            <>
              <h3>Образование</h3>
              {(member.education || []).map((edu, i) => (
                <p key={i}>
                  {edu.university}<br />
                  {edu.degree} — {edu.year}
                </p>
              ))}
            </>
          )}

          {member.about?.length > 0 && (
            <>
              <h3>О специалисте</h3>
              {(member.about || []).map((text, i) => <p key={i}>{text}</p>)}
            </>
          )}

          {member.requests?.length > 0 && (
            <>
              <h3>С какими запросами можно обратиться</h3>
              <ul>
                {(member.requests || []).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {member.approaches?.length > 0 && (
            <>
              <h3>Используемые подходы</h3>
              <ul>
                {(member.approaches || []).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          {member.helpsWith?.length > 0 && (
            <>
              <h3>Сможет помочь</h3>
              <ul>
                {(member.helpsWith || []).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          <button className="member-btn">Записаться на консультацию</button>
        </div>
      </div>
    </div>
  )
}

export default MemberPage
