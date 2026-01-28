import { Link } from 'react-router-dom'
import team from '../data/team'

function TeamPage() {

  return (
    <div className="team-page">
      <h1 className="team-title">Наша команда</h1>

      <div className="team-grid">
        {team.map(member => (
          <Link
            to={`/team/${member.id}`}
            key={member.id}
            className="team-card"
          >
            <img src={member.image} alt={member.name} />
            <div className="team-card__content">
              <h3>{member.name}</h3>
              <p className="team-card__position">
                {member.positions[0]}
              </p>
              <p className="team-card__specialization">
                «{member.specialization}»
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeamPage
