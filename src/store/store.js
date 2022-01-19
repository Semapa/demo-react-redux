import { applyMiddleware, createStore, compose } from 'redux'
import { logger } from './middleware/logger'
import { thunk } from './middleware/thunk'
import taskReducer from './task'

const middlewareEnhancer = applyMiddleware(logger, thunk)

function configureStore() {
  return createStore(
    taskReducer,
    // compose передает результат выполннеой в цепочке функции в следующую
    compose(
      middlewareEnhancer,
      // Если есть redux devtools расширение chrome
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}

export default configureStore
