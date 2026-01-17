function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <label className="todo-left"></label>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>✖</button>
    </div>
  )
}
export default TodoItem
