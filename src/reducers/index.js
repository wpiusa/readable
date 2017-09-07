import { combineReducers } from 'redux'


import {
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../actions'

function posts(state,action) {
  switch (action.type) {
  	case ADD_POST:
  	  return{
        state
  	  }
  	case DELETE_POST:
  	  return{
        state
  	  } 
  	case ADD_COMMENT:
  	  return{
        state
  	  } 
  	case DELETE_COMMENT:
  	  return{
        state
  	  } 
  	default:
  	  return state     
  }
}

export default combineReducers({
  posts,
})