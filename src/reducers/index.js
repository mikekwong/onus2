import { uniqueId } from '../actions'

// (using utility function to dynamically generate new ids) This ensures your task IDs will increment correctly as you create them, and you’ll use these IDs when you allow users to edit tasks later
const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress'
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress'
  }
]

export default function tasks (state = { tasks: mockTasks }, action) {
  if (action.type === 'CREATE_TASK') {
    return { tasks: [...state.tasks, action.payload] }
  }
  return state
}
