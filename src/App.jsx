import { useState, useEffect } from 'react'

import Confetti from 'react-confetti';

import Header from './components/Header'
import Footer from './components/Footer' 
import Task from './components/Task' 

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || [
            {
                id: 1,
                title: 'Task 1',
                completed: false
            }
        ]
    );
    
    function handleChange(event, taskId) {
        const { name, value } = event.target;
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, [name]: value };
                }
                return task;
            });
        });
    }
    
    function addTask() {
        setTasks(prevState => {
            const newTask = {
                id: prevState.length + 1,
                title: `Task ${prevState.length + 1}`,
                completed: false
            }
            return [...prevState, newTask]
        })
    }

    function completedTask(id) {
        setTasks(prevState => {
            return prevState.map(task => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })
        })
    }

    function deleteTask(id) {
        setTasks(prevState => {
            return prevState.filter(task => task.id !== id)
        })
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    , [tasks])

    function moveTaskUp(id) {
        setTasks(prevTasks => {
            const index = prevTasks.findIndex(task => task.id === id);
            if (index === 0) return prevTasks; 
    
            const newTasks = [...prevTasks]; 
            const currentTask = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = currentTask;
    
            return newTasks;
        });
    }
    
    function moveTaskDown(id) {
        setTasks(prevTasks => {
            const index = prevTasks.findIndex(task => task.id === id);
            if (index === prevTasks.length - 1) return prevTasks; 
    
            const newTasks = [...prevTasks]; 
            const currentTask = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = currentTask;
    
            return newTasks;
        });
    }
    

    const allTasksCompleted = tasks.every(task => task.completed);

    return(
        <div className='todo'>
            <Header />
            <ul className="tasks-container">
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task}
                        setTasks={setTasks}
                        handleChange={handleChange}
                        handleComplete={completedTask} 
                        handleDelete={deleteTask}
                        moveUp={moveTaskUp}
                        moveDown={moveTaskDown}
                    />
                ))}
                {tasks.length === 0 && <p>No tasks</p>}
            </ul>
            <Footer handleClick={addTask} task={tasks}/>
            {allTasksCompleted && tasks.length !== 0 && <Confetti />}
        </div>
    )


}

export default App
