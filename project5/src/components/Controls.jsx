import { useDispatch } from 'react-redux'
import { startGame } from '../store/gameSlice'

export default function Controls() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className="btn" onClick={() => dispatch(startGame({ size:3, winLength:3 }))}>3 x 3</button>
      <button className="btn" onClick={() => dispatch(startGame({ size:4, winLength:3 }))}>4 x 4</button>
      <button className="btn" onClick={() => dispatch(startGame({ size:5, winLength:4 }))}>5 x 5</button>
    </div>
  )
}