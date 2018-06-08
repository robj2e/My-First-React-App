import React from 'react'
import WeatherContainer from './components/weather-container'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Hello World'
    }
  }
  render () {
    return (
      <WeatherContainer />
    )
  }
}

export default App
