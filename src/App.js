import React from 'react'
import WeatherContainer from './components/weather-container'
import styled from 'styled-components'

const WholeApp = styled(WeatherContainer)`
  
    background: linear-gradient(to right, #373b44, #4286f4);
  
`

class App extends React.Component {
  render () {
    return (
      <WholeApp />
    )
  }
}

export default App
