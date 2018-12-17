import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const myReducer = (state = { isFetching: false }, action) => state

export default combineReducers({
  myReducer,
  form
})
