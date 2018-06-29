import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import initialState from './initialState'
import configureStore from './configureStore'

const store = configureStore(initialState)

// This ReactDOM.render element places the App component exported from App.js within the div named 'root' in index.html and renders it to display.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
