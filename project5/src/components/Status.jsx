import { useSelector } from 'react-redux'

export default function Status() {
  const { winner, xIsNext } = useSelector(s => s.game)
  if (winner) return (
  <div>
    {winner === 'X' && <h2>🥳 Победил X</h2>}
    {winner === 'O' && <h2>🔥 Победил O</h2>}
    {winner === 'draw' && <h2>🤝 Ничья</h2>}
  </div>
  )
  return <h2>Ходит: {xIsNext ? 'X' : 'O'}</h2>
}