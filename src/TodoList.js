import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType'

const TodoList = props => {
  return (
    <div>
      <div>
        <input type="text" value={props.inputValue} onChange={props.handleInputChange} />
        <button onClick={props.handleSubmitItem}>提交</button>
      </div>
      <ul>
        {props.list.map((item, index) => (
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => {
              props.handleDeleteItem(index)
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value,
      }
      dispatch(action)
    },
    handleSubmitItem() {
      const action = {
        type: ADD_TODO_ITEM,
      }
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = {
        type: DELETE_TODO_ITEM,
        index,
      }
      dispatch(action)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
