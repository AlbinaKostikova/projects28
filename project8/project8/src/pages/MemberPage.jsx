import { useParams } from 'react-router-dom'

function MemberPage() {
  const { id } = useParams()
  return (
    <div className="member-page">
      <h1>Member Page</h1>
      <p>ID: {id}</p>
    </div>
  )
}
export default MemberPage