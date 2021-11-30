import React from "react";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

const TasksContainer = ( { tasks } ) => {
  return (
    <div>
      <ul>
        {tasks.map(task => <li>{task.name} {task.end} <input type='checkbox' checked={task.completed}></input> <button>Edit</button></li>)}
      </ul>
      <AddTaskButton />
    </div>
  )
}

export default TasksContainer