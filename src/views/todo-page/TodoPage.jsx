import React from "react";
import TasksContainer from "../../components/TasksContainer/TasksContainer";

const TodoPage = () => {

  const tasks = [
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
    {
      name: 'Default boring task',
      end: '99-99-9999',
      completed: true,
    },
  ]

  return (
    <div>
      <header>
        <h1>TODO</h1>
        <h3>Basic todo list app.</h3>
      </header>
      <main>
        <TasksContainer tasks={tasks} />
      </main>
    </div>
  )
}

export default TodoPage