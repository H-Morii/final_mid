import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodos from './component/ListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ListTodos/>
  )
}

export default App
