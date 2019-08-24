import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './components/TasksPage'
import { createTask } from './actions'

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }))
  }
  render () {
    // console.log(this.props)
    return (
      <div className='maincontent'>
        {/* tasks will be available via props after connected to the store */}
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
      </div>
    )
  }
}
// state argument is the entire content of the redux store, (calling getState on the store instance)
// return value of mapStateToProps is passed into the App component as props, which is why render can reference this.props.tasks
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
