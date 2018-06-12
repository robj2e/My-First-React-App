import React from 'react'
import styled from 'styled-components'
import Sunny from '../images/Sunny.png'
import Cloudy from '../images/SunnyCloudy.png'
import MostlyCloudy from '../images/MostlyCloudy.png'
import Raining from '../images/Raining.png'

function whichWeatherPic (forecast) {
  switch (forecast.code) {
    case '26':
      return Cloudy
    case '28':
      return MostlyCloudy
    case '39':
      return Raining
    default:
      return Sunny
  }
}

const StyledWeatherTile = styled.div`
    background:lightgrey;
    height: 150px;
    overflow-x: auto;
    border-style: solid;
    border-width: 2px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`
const TileDate = styled.div`
    font-family: 'Muli', sans-serif;
    text-align: center;
    padding-top: -18px;
`

const TileImage = styled.img`
    height 50px;
    object-fit: contain;
`

const WeatherTile = ({forecast}) => (
  <StyledWeatherTile>
    <TileDate>{forecast.date}</TileDate>
    <TileImage src={whichWeatherPic(forecast)} />
  </StyledWeatherTile>
)

export default WeatherTile
