let _id = 1
// utility function to generate numeric ids for tasks.
export const uniqueId = () => {
  return _id++
}

// action creator
// function signature makes it clear that title and desc are required to dispatch CREATE_TASK action
export const createTask = ({ title, description }) => {
  return {
    type: 'CREATE_TASK',
    // payload property contains all data necessary to perform the action
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted'
    }
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
