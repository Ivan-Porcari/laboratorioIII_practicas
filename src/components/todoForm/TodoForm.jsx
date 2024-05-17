import { useState } from "react"
import PropTypes from 'prop-types';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = event => {
        event.preventDefault();

        if (value.trim() === "") {
            alert("Por favor, ingresa una tarea.");
            return;
          }

        addTodo(value)

        setValue("")
    }

  return (
    <form 
    className="TodoForm"
    onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="todo-input" 
        placeholder="Qué hay que hacer ?"
        onChange={(event) => setValue(event.target.value)}
        value={value}></input>
        <button type="submit" className="todo-btn">Agregar Tarea</button>
    </form>
   )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func
  };

export default TodoForm