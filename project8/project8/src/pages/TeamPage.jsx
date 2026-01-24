import { Link } from 'react-router-dom'

function TeamPage() {
  return (
    <div className="team-page">
      <h1>Team Page</h1>
      <div className="member-card">
        <Link to={`/member/${member.id}`}>Подробнее</Link>
      </div>
    </div>
  )
}
export default TeamPage
