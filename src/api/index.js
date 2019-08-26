import axios from 'axios'

const API_BASE_URL = 'http://localhost:30001'

const client = axios.create({
  baseURL: API_BASE_URL,
  // The ContentType header is required by jsonserver for PUT requests.
  headers: {
    'Content-Type': 'application/json'
  }
})

// exports a named fetchTAsks function that will make the call
export const fetchTasks = () => {
  return client.get('/tasks')
}
