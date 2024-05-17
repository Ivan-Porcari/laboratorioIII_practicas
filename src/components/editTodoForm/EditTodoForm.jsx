import { useState } from "react"
import PropTypes from 'prop-types';

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    const handleSubmit = event => {
        event.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }

  return (
    <form 
    className="TodoForm"
    onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="todo-input" 
        placeholder="Corregir Tarea"
        onChange={(event) => setValue(event.target.value)}
        value={value}></input>
        <button type="submit" className="todo-btn">Editar Tarea</button>
    </form>
   )
}

EditTodoForm.propTypes = {
    editTodo: PropTypes.func,
    task: PropTypes.string,
  };

export default EditTodoForm