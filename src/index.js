import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// This ReactDOM.render element places the App component exported from App.js within the div named 'root' in index.html and renders it to display.

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
