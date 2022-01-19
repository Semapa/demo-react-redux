// export function logger({ getState, dispatch }) {
export function logger(state) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      //   if (action.type === 'task/update') {
      //     // так как мы удаляем элемент, то для него не сможем вызвать уже next action,
      //     // поэтому делаем return
      //     return dispatch({ type: 'task/remove', payload: { ...action.payload } })
      //   }
      return next(action)
    }
  }
}
