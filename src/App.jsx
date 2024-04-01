import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((oldtodos) => [...oldtodos, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((oldtodos) => oldtodos.map((oldTodo) => (oldTodo.id === id ? todo : oldTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((oldtodos) => oldtodos.filter((oldTodo) => oldTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((oldtodos) => oldtodos.map((oldTodo) => oldTodo.id === id ? { ...oldTodo, completed: !oldTodo.completed } : oldTodo))
  }

  useEffect(() => {

    if (todos !== undefined) {
      const todos = JSON.parse(localStorage.getItem("todos")) // Set default as empty array
    }
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    // local storage takes and sets things in string, so we need to convert the array to string using JSON.stringify
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
          </h1>

          <div className='mb-4'>

            <TodoForm />
          </div>

          <div className='flex flex-wrap gap-y-3'>
            {/*Loop and Add todo list here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>

            ))}
          </div>


        </div>
      </div>
    </TodoProvider>
  )
}

export default App
