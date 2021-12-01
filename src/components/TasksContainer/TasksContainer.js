import React from "react";
import './TasksContainer.css'
import AddTaskButton from "../AddTaskButton/AddTaskButton";

const TasksContainer = ( { tasks } ) => {
  return (
    <div className='tasks-container'>
      <ul>
        {tasks.map(task => <li>{task.name} {task.end} <input type='checkbox' checked={task.completed}></input> <button>Edit</button></li>)}
      </ul>
      <AddTaskButton />
    </div>
  )
}

export default TasksContainer