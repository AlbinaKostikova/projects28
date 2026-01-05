import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: 3,
  winLength: 3,
  board: [],
  xIsNext: true,
  winner: null,
  gameOver: false
}

const createBoard = (size) => Array(size*size).fill(null)

function checkWinner(board, size, winLength) {
  function get(x, y) {
    return board[y * size + x]
  }
  function inBounds(x, y) {
    return x >= 0 && x < size && y >= 0 && y < size
  }
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
  ]
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const player = get(x, y)
      if (!player) continue

      for (let [dx, dy] of directions) {
      let count = 1

        for (let step = 1; step < winLength; step++) {
          const nx = x + dx * step
          const ny = y + dy * step

          if (!inBounds(nx, ny)) break
          if (get(nx, ny) !== player) break
          count++
        }
        if (count === winLength) return player
      }
    }
  }
  return null
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state, action) {
      state.size = action.payload.size
      state.winLength = action.payload.winLength
      state.board = createBoard(state.size)
      state.xIsNext = true
      state.winner = null
      state.gameOver = false
    },
    makeMove(state, action) {
      const index = action.payload
      if(state.board[index] || state.gameOver) return
      state.board[index] = state.xIsNext ? 'X' : 'O'
      state.xIsNext = !state.xIsNext

      const winner = checkWinner(state.board, state.size, state.winLength)
      if (winner) {
        state.winner = winner
        state.gameOver = true
      }
      if (!winner && state.board.every(cell => cell)) {
        state.winner = 'draw'
        state.gameOver = true
      }
    }
  }
})
export const { startGame, makeMove } = gameSlice.actions 
export default gameSlice.reducer