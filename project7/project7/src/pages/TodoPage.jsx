import Header from "../components/Header"
import Search from "../components/Search"
import Sort from "../components/SortSelect"
import TodoList from "../components/TodoList"
import { useState } from 'react'

function TodoPage() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('date')

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
    const newTodo = {
      id: Date.now(), 
      text,
      completed: false,
      createdAt: new Date()
    }
    setTodos(prev => [newTodo, ...prev])
  }
  function toggleTodo(id) {
    setTodos(prev => prev.map(todo => todo.id === id 
      ? { ...todo, completed: !todo.completed}
      : todo
    ))
  }
  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="wrapper">
      <Header onAddTodo={addTodo} />
      <Search value={search} onChange={setSearch} />
      <Sort value={sort} onChange={setSort} />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    </div>
  )
}
export default TodoPage