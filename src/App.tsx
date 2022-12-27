import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const App: React.FC<TodoListProps> = (props: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>(props.todos)
  const [todo, setTodo] = useState<string>('')

  const addTodo = () => {
    const newTodos = [
      ...todos,
      { id: Date.now(), text: todo, isCompleted: false }
    ]
    setTodos(newTodos)
  }

  const completeTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isCompleted ? 'line-through' : undefined }}>{todo.text}</span>
            <button type="button" onClick={() => completeTodo(todo.id)}>
              {todo.isCompleted ? 'Incomplete' : 'Complete'}
            </button>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
        <li>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type="button" onClick={addTodo}>
            Add Todo
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App
