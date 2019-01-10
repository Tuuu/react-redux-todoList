import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType'

const defaultState = {
  inputValue: '', // 输入值
  list: [1, 2, 3], // todoList 的数组
}
// reducer 可以接收 state 但是不能修改 state
export default (state = defaultState, action) => {
  const newSate = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newSate.inputValue = action.value
      break
    case ADD_TODO_ITEM:
      newSate.list.push(newSate.inputValue)
      newSate.inputValue = ''
      break
    case DELETE_TODO_ITEM:
      newSate.list.splice(action.index, 1)
      break
    default:
      break
  }
  return newSate
}
