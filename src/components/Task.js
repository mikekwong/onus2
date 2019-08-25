import React from 'react'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const Task = props => {
  return (
    <div className='task'>
      <div className='task-header'>
        <div>{props.task.title}</div>
        {/* onChange adds a callback to ru nweh nthe drop-down's change event fires */}
        <select value={props.task.status} onChange={onStatusChange}>
          {TASK_STATUSES.map(status => {
            return (
              <option key={status} value={status}>
                {status}
              </option>
            )
          })}
        </select>
      </div>
      <hr />
      <div className='task-body'>{props.task.description}</div>
    </div>
  )
  // Calls onStatusChange with the ID of the updated task and the value of the new status
  function onStatusChange (e) {
    props.onStatusChange(props.task.id, e.target.value)
  }
}

export default Task
