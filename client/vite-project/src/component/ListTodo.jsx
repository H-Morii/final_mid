import React, { Fragment ,useEffect , useState } from "react";

  
const link = "https://final-front-0r0w.onrender.com/"

const ListTodos = () => {


  const [todos, setTodos] = useState([])
  //DELETE FUNCTION

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${link}final_table/${id}`, {
      method: "DELETE"
    })

    console.log(deleteTodo)
    setTodos(todos.filter(todo => todo.id !== id))
    } catch (err) {
      console.log(err.message)
    }
  }

  const getTodos = async () => {
    try {
      
      const response = await fetch(`${link}final_table`)
      const jsonData = await response.json()

      setTodos(jsonData) 
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {
    getTodos()
  },[])

  return (<Fragment>
    <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th>Description</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {/*<tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>*/}
  {todos.map(todo => (
    <tr key={todo.id}>
      <td>{todo.description || "No description available"}</td>
      {/* <td><EditTodo todo={todo}/></td>  */}
      <td>Edit</td>
      <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
    </tr>
  ))}
  </tbody>
</table>
</Fragment>
)
}

export default ListTodos