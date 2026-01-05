import { useSelector, useDispatch } from 'react-redux'
import { makeMove } from '../store/gameSlice'
import Square from './Square'

export default function Board() {
  const { board, size } = useSelector(state => state.game)
  const dispatch = useDispatch()

  return (
    <div
    style={{ display: 'grid',
    gridTemplateColumns: `repeat(${size}, 80px)`
     }}>
    {board.map((cell, i) => (
      <Square 
        key={i} 
        value={cell} 
        onClick={() => dispatch(makeMove(i))} 
      />
    ))}
     </div>
  )
}