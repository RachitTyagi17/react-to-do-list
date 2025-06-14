import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  }, [])

  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id);
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS(newTodos);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS(newTodos);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS();
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS(newTodos);
  }

  const togglefinished = (e) => {
    setshowFinished(!showFinished);
  }

  return (
    <>
      <Navbar />
      <div className="main bg-violet-100 rounded-sm sm:w-1/2 mx-auto p-2 mt-2 min-h-screen">
        <div className="input mt-3 flex flex-col">
          <h1 className='font-bold text-xl sm:text-2xl mb-1 self-center'>iTask - Your Daily Task Manager</h1>
          <input onKeyDown={(e) => { if (e.key === "Enter") { handleAdd(); } }} onChange={handleChange} value={todo} type="text" className='h-8 w-full border-2 rounded-sm' />
          <button onClick={handleAdd} disabled={todo.length < 3} className='font-semibold h-8 text-sm mx-auto mt-2 mb-4 w-20 border-2 bg-violet-400 rounded-md p-0.5'>Add task</button>
        </div>
        <input id="show" onChange={togglefinished} type="checkbox" name="" checked={showFinished} />
        <label className='text-md m-2' htmlFor="show">Show Completed</label>
        <div className="todos flex flex-col gap-5">
          <h1 className='font-bold mt-4'>Your Tasks :</h1>
          {todos.length === 0 && <div className='font-bold text-violet-400'>No Todos To display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex gap-2 w-full ">
              <input className='h-4 mt-1.5' name={item.id} onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted} />
              <h3 className={`w-[59%]   text-md  ${item.isCompleted ? "line-through" : ""}`}> {item.todo}</h3>
              <div className="buttons">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='font-semibold text-sm h-6 ml-2 mt-2 border-2 bg-violet-400 rounded-md p-0.5'>{<FaEdit />}</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='font-semibold text-sm h-6 ml-2  border-2 bg-violet-400 rounded-md p-0.5'>{<MdDelete />}</button>
              </div>
            </div>
          })}
        </div>
      </div>

    </>
  )
}

export default App
