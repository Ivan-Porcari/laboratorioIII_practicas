import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
      <p 
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon className="edit-icon" icon={faEdit}
      onClick={() => editTodo(task.id)}/>
      <FontAwesomeIcon 
      className="delete-icon" icon={faTrash}
      onClick={() => deleteTodo(task.id)}/> 
      </div>
    </div>
  )
}

ToDo.propTypes = {
  task: PropTypes.string,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
};

export default ToDo