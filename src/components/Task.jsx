import arrow from '../assets/arrow.svg'
import trash from '../assets/trash.svg'

const Task = ({task, handleChange ,handleComplete, handleDelete, moveUp, moveDown}) => {

  return (
    <li className="task">
    <div className="task__content">
        <input 
            type="checkbox"
            name="completed"
            id="completed"
            onChange={() => handleComplete(task.id)}
            checked={task.completed}
        />
        <div>
            <input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Title..."
                className={task.completed && task.title !== '' ? 'task__title--completed' : 'task__title'}
                value={task.title}
                onChange={(e) => handleChange(e, task.id)}
            />
        </div>
    </div>
    <div className="task__controls">
        <button className="task__controls--up" onClick={() => moveUp(task.id)}>
            <img src={arrow} alt="arrow up" />
        </button>
        <button className="task__controls--down" onClick={() => moveDown(task.id)}>
            <img src={arrow} alt="arrow down" />
        </button>
        <button className="task__controls--delete" onClick={() => handleDelete(task.id)}>
            <img src={trash} alt="trash" />
        </button>
    </div>
    </li>
  )
}

export default Task