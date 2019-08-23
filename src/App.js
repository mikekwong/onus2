import React, { Component } from 'react'
import TasksPage from './components/TasksPage'

export default class App extends Component {
  render () {
    return (
      <div className='maincontent'>
        <TasksPage tasks={mockTasks} />
      </div>
    )
  }
}
