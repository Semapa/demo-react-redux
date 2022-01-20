import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { titleChanged, taskDeleted, completeTask, getTasks } from './store/task'
import configureStore from './store/store'
import { Provider, useSelector } from 'react-redux'

const store = configureStore()

const App = () => {
  const state = useSelector((state) => state)

  useEffect(() => {
    store.dispatch(getTasks())
  }, [])

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
            <button onClick={() => store.dispatch(completeTask(el.id))}>
              Complete
            </button>
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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
