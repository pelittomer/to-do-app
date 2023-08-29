import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Todos from './components/todos/Todos'
function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const getTodos = () => {
    axios.get('http://localhost:3001/todos')
      .then((res) => {
        setTodos(res.data)
      })
      .catch((error) => {
        console.log("İşlem başarısız!: ", error)
      })
  }
  useEffect(() => {
    getTodos()
  }, [])
  const addTask = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/todos/new", { todo })
      .then((callback) => {
        console.log("işlem başarılı!", callback)
        window.location.reload();
      }).catch((error) => {
        console.log("işlem başarısız!", error)
      })
  }
  return (
    <div className="main">
      <div className='main-content'>
        <h1>TODO LİST Demo App</h1>
        <h3>Do it now.</h3>
      </div>
      <form className='form-task' onSubmit={addTask}>
        <input type="text" placeholder='New Task...' value={todo} maxLength={20} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' disabled={!todo} className='btn-task'>Add task</button>
      </form>
      <Todos todos={todos} />
    </div>
  )
}

export default App
