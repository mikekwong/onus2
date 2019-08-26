import axios from 'axios'
// Imports all available API methods
import * as api from '../api'
import { FETCH_TASKS_SUCCEEDED, CREATE_TASK_SUCCEEDED } from './actions'

// let _id = 1
// // utility function to generate numeric ids for tasks.
// export const uniqueId = () => {
//   return _id++
// }

// synchronous action will be dispatched if the request complete successfully below
export const fetchTasksSucceeded = tasks => {
  return {
    type: FETCH_TASKS_SUCCEEDED,
    payload: { tasks }
  }
}

// returns an async function instead of an action - made possible by redux-thunk
// allows you to dispatch function (async dispatch) instead of object
export const fetchTasks = () => async dispatch => {
  try {
    // then inside this function I can make network requests to dispatch additional actions when any request completes
    // Uses the friendlier interface for making an AJAX call
    const { data } = await api.fetchTasks()
    // dispatches a syncrhonous action creator
    dispatch(fetchTasksSucceeded(data))
  } catch (error) {
    console.error(error)
  }
}

// action creator
// function signature makes it clear that title and desc are required to dispatch CREATE_TASK action
// export const createTask = ({ title, description }) => {
//   return {
//     type: 'CREATE_TASK',
//     // payload property contains all data necessary to perform the action
//     payload: {
//       id: uniqueId(),
//       title,
//       description,
//       status: 'Unstarted'
//     }
//   }
// }

// synchronous action creator
const createTaskSucceeded = task => {
  return {
    type: CREATE_TASK_SUCCEEDED,
    payload: { task }
  }
}

export const createTask = ({
  title,
  description,
  status = 'Unstarted'
}) => async dispatch => {
  try {
    const { data } = await api.createTask({ title, description, status })
    dispatch(createTaskSucceeded(data))
  } catch (error) {
    console.error(error)
  }
}

// action creator
// param id is which task to edit and params object are for fields being updated
export const editTask = (id, params = {}) => {
  return {
    type: 'EDIT_TASK',
    payload: {
      id,
      params
    }
  }
}
