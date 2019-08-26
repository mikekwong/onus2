// import { uniqueId } from '../actions'

// (using utility function to dynamically generate new ids) This ensures your task IDs will increment correctly as you create them, and you’ll use these IDs when you allow users to edit tasks later
// const mockTasks = [
//   {
//     id: uniqueId(),
//     title: 'Learn Redux',
//     description: 'The store, actions, and reducers, oh my!',
//     status: 'In Progress'
//   },
//   {
//     id: uniqueId(),
//     title: 'Peace on Earth',
//     description: 'No big deal.',
//     status: 'In Progress'
//   }
// ]

export default function tasks (state = { tasks: [] }, action) {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        tasks: [...state.tasks, action.payload]
      }
    case 'EDIT_TASK':
      const { payload } = action
      return {
        // Because the list of tasks is stored as an array, to update the right task iterate over the list of tasks with map, and if the current task matches the ID from the payload, update it with the new params.
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            // Uses Object.assign to update the task object by returning a new copy, not modifying the original object
            return Object.assign({}, task, payload.params)
          }
          return task
        })
      }
    // reducer listens for server action now
    case 'FETCH_TASKS_SUCCEEDED':
      return {
        tasks: action.payload.tasks
      }
    case 'CREATE_TASK_SUCCEEDED':
      return {
        tasks: [...state.tasks, action.payload.task]
      }
    default: {
      return state
    }
  }
}
