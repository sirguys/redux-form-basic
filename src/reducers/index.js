import { combineReducers } from 'redux'

const myReducer = (state = { isFetching: false }, action) => state

export default combineReducers({
  myReducer
})
