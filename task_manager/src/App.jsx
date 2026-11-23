import { useState } from 'react'
import './App.css'

function App() {
  // These states store the current input, all tasks, and the selected filter.
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  // Add a new task when the Add Task button is clicked.
  function addTask() {
    if (task.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      name: task,
      priority: priority,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTask('')
    setPriority('Medium')
  }

  // Change the completed value of the selected task.
  function toggleTask(id) {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })

    setTasks(updatedTasks)
  }

  // Remove the selected task from the task list.
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  // Show tasks that match the selected filter.
  const visibleTasks = tasks.filter((item) => {
    if (filter === 'Pending') {
      return !item.completed
    }
    if (filter === 'Completed') {
      return item.completed
    }
    return true
  })

  return (
    <main className="app">
      <h1>Task Manager</h1>

      <div className="form">
        <input
          type="text"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />

        <select
          className="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button className="add" onClick={addTask}>Add Task</button>
      </div>

      <div className="info">
        <p>Total Tasks: {tasks.length}</p>

        <div className="filters">
          <button className="filter" onClick={() => setFilter('All')}>All</button>
          <button className="filter" onClick={() => setFilter('Pending')}>Pending</button>
          <button className="filter" onClick={() => setFilter('Completed')}>Completed</button>
        </div>
      </div>

      <ul className="list">
        {visibleTasks.length === 0 ? (
          <li className="empty">No tasks to show.</li>
        ) : (
          visibleTasks.map((item) => (
            <li className="task-item" key={item.id}>
              <div>
                <span className={item.completed ? 'completed' : ''}>
                  {item.name}
                </span>
                <small className={`priority ${item.priority.toLowerCase()}`}>
                  {item.priority}
                </small>
              </div>

              <div className="submit">
                <button className="complete" onClick={() => toggleTask(item.id)}>
                  {item.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="delete"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  )
}

export default App
