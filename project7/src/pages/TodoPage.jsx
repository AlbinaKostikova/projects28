import Header from "../components/Header"
import Search from "../components/Search"
import Sort from "../components/SortSelect"
import TodoList from "../components/TodoList"
import { useState, useEffect } from 'react'

function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('date')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function applySearchAndSort(todos, search, sort) {
    let result = [...todos]

    if (search) {
      result = result.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (sort === 'date') {
      result.sort((a, b) => b.createdAt - a.createdAt)
    }
    if (sort === 'alphabet') {
      result.sort((a, b) => a.text.localeCompare(b.text))
    }
    return result
  }
  const visibleTodos = applySearchAndSort(todos, search, sort)

  function addTodo(text) {
    setTodos([
      ...todos, 
      {
      id: Date.now(), 
      text,
      completed: false,
      createdAt: Date.now()
    }
  ])
  }
  function toggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, completed: !todo.completed} 
      : todo
    ))
  }
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function editTodo(id, newText) {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, text: newText}
      : todo)
    )
  }
  return (
    <div className="wrapper">
      <Header onAddTodo={addTodo} />
      <Search value={search} onChange={setSearch} />
      <Sort value={sort} onChange={setSort} />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  )
}
export default TodoPage