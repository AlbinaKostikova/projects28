import { useState } from 'react'

function Header({ onAddTodo }) {
  const [value, setValue] = useState('')
  const handleSubmit = () => {
    const text = value.trim()
    if (!text) return
    onAddTodo(text)
    setValue('')
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <div className="container">
      <div className="logo"></div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Напишите новую задачу"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="addInputBtn">
          onClick={handleSubmit}
        </button>
      </div>
    </div>
  )
}
export default Header
