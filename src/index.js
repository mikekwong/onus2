import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import tasks from './reducers'

// devtoolsenhancer connects chrome ext with store for debugging purposes
const store = createStore(tasks, devToolsEnhancer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
