

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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64648 7.00002L4.35359 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="black"/>
                </g>
            </svg>
        </button>
        <button className="task__controls--down" onClick={() => moveDown(task.id)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64648 7.00002L4.35359 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="black"/>
                </g>
            </svg>
        </button>
        <button className="task__controls--delete" onClick={() => handleDelete(task.id)}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                    fill="currentColor"
                />
                <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                <path d="M13 9H15V17H13V9Z" fill="currentColor" />
            </svg>
        </button>
    </div>
    </li>
  )
}

export default Task