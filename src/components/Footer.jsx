

const Footer = ({task, handleClick}) => {
  return (
    <div className="footer">
        <div>
            Completed {
                task.filter((task) => task.completed === true).length
            } of {task.length}
        </div>
        <div>
            <button onClick={handleClick}>
                <span>+</span> Add Task
            </button>
        </div>
    </div>
  )
}

export default Footer