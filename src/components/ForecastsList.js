import React from 'react'
import styled from 'styled-components'
import WeatherTile from './WeatherTile'

const TitleStyle = styled.h2`
  font-size: 28px;
  color: black;
  text-align: center;
  font-family: 'Inconsolata', monospace;
  margin-top:45px;
  color: white;
`
const TileContainerStyle = styled.div`
  display: flex;
  height: 500px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
`
const cityCapitalised = (cityname) => {
  if (cityname.split(' ').length > 1) {
    return cityname.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ')
  } else {
    return cityname.charAt(0).toUpperCase() + cityname.slice(1).toLowerCase()
  }
}

const ForecastsList = (props) => {
  const {forecast, searchedCity} = props
  return (
    <div>
      <div>
        <TitleStyle>{`${cityCapitalised(searchedCity)}, UK`}</TitleStyle>
      </div>
      <TileContainerStyle>
        {forecast.map((f, index) => (
          <WeatherTile forecast={f} key={index} index={index} />
        ))}
      </TileContainerStyle>
    </div>
  )
}

export default ForecastsList
