import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { v4 as uuidv4 } from "uuid";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let todo = todos.filter(i => i.id === id)
    setTodo(todo[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newtodos)
    saveToLocal()
  }

  const handleDel = (e, id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newtodos)
    saveToLocal()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLocal()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleChkbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    saveToLocal()
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  return (
    <>
      <div className="container bg-purple-700 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 h-auto sm:h-[85vh] mx-auto mt-5 rounded-2xl p-5">
        <div className='text-center font-bold text-white text-3xl text-shadow-lg/50 font-mono'>TO-DO LIST</div>
        <div className="addTodo bg-white rounded-xl p-2 my-2.5 flex flex-col sm:flex-row gap-4 sm:gap-16">
          <input onChange={handleChange} value={todo} className="w-full sm:w-3/4 rounded-md border-2 border-purple-400 text-black pl-1.5 font-mono" type="text " placeholder='Add your todo' />
          <button onClick={handleAdd} disabled={todo.length < 1} className='rounded-md bg-purple-500 hover:bg-purple-600 px-2.5 py-2 text-white font-bold'>Add</button>
        </div>
        <h1 className='text-2xl font-bold text-white font-mono'>Your Todos</h1>
        <div className="todos h-auto sm:h-3/4 max-h-[60vh] sm:max-h-[65vh] overflow-y-auto bg-white rounded-xl p-2 no-scrollbar">
          {todos.length === 0 && <div className='text-center font-semibold text-gray-500 font-mono'> No Todos yet </div>}
          {todos.map(item => {
            return <div key={item.id} className="todo bg-purple-200 py-1.5 px-2.5 rounded-xl flex flex-col sm:flex-row my-2 items-start sm:items-center justify-between gap-2">
              <div className="txt flex items-center gap-3">
                <input onChange={handleChkbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}> {item.todo} </div>
              </div>
              <div className="btns flex h-full gap-3 justify-evenly">
                <button onClick={(e) => handleEdit(e, item.id)} className='rounded-md bg-purple-500 hover:bg-purple-600 px-2.5 py-2 text-white font-bold' ><MdEdit />
                </button>
                <button onClick={(e) => handleDel(e, item.id)} className='rounded-md bg-purple-500 hover:bg-purple-600 px-2.5 text-white font-bold' ><MdDelete />
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
