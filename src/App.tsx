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
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
    
      <div className='flex text-6xl justify-center font-serif text-black font-extrabold p-4'>Todo List 📑</div>
    
    <body>
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className='m-3 font-serif' style={{ textDecoration: todo.isCompleted ? 'line-through' : undefined }}>{todo.text}</span>
            <button className=' bg-slate-400 text-white p-1 m-4 rounded-md' type="button" onClick={() => completeTodo(todo.id)}>
              {todo.isCompleted ? 'Not Done 😔' : 'Done 😎'}
            </button>
            <div >
            <button className=' bg-blue-800 text-white p-1 m-4 rounded-md' type="button" onClick={() => removeTodo(todo.id)}>
              Dismiss 🔚
            </button>
            </div>
          </li>
        ))}
        <li>
          <input className=' p-1 m-4' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button className=' bg-blue-800 text-white p-1 px-3 m-3 rounded-md text-lg mr-5' type="button" onClick={addTodo}>
            Add Todo
          </button>
        </li>
      </ul>
    </div>
    </body>
    
    </div>
  )
}

export default App
