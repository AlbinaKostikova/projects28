import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit}) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(todo.text)

  function startEdit() {
    setIsEditing(true)
    setValue(todo.text)
  }
  function saveEdit() {
    if (!value.trim()) return
    onEdit(todo.id, value.trim())
    setIsEditing(false)
  }
  function cancelEdit() {
    setValue(todo.text)
    setIsEditing(false)
  }
  function handleKeyDown(e) {
    if(e.key === 'Enter') saveEdit()
    if(e.key === 'Escape') cancelEdit()
  }
  return (
    <div className="todo-item">
      <label className="todo-left"></label>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {isEditing ? (
        <input className="todo-edit-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        />
      ) : (
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      )}
      {isEditing ? (
        <button onClick={saveEdit} title='Сохранить'>✔</button>
        ) : (
        <button onClick={startEdit} title='Редактировать'>✎</button>

      )}
      <button onClick={() => onDelete(todo.id)} title="Удалить">✖</button>
    </div>
  )
}
export default TodoItem
