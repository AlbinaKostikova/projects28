import Controls from './components/Controls'
import Status from './components/Status'
import Board from './components/Board'
import './index.css'
import { useSelector } from 'react-redux'

export default function App() {
  const { winner } = useSelector(state => state.game)
  return (
    <div className="container">
      <h1 className="title">Крестики-нолики</h1>
      <Controls />
      <Status />
      <Board />
    </div>
  )
}