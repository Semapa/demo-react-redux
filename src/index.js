import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { taskCompleted, titleChanged, taskDeleted } from './store/task'
import configureStore from './store/store'

const store = configureStore()

const App = () => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const completeTask = (taskId) => {
    store.dispatch(taskCompleted(taskId))
  }

  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId))
  }

  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
  }

  return (
    <>
      <h1> App </h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Complited: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Complete</button>
            <button onClick={() => changeTitle(el.id)}>Change titlt</button>
            <button onClick={() => deleteTask(el.id)}>Delete task</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
