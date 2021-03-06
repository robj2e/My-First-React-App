import React from 'react'
import styled from 'styled-components'
import Sunny from '../images/Sunny.png'
import Cloudy from '../images/SunnyCloudy.png'
import MostlyCloudy from '../images/MostlyCloudy.png'
import Raining from '../images/Raining.png'

function whichWeatherPic (forecast) {
  switch (forecast.code) {
    case '26' :
    case '29' :
    case '30' :
    case '44' :
      return Cloudy
    case '28':
    case '27':
      return MostlyCloudy
    case '11':
    case '12':
    case '35':
    case '40':
      return Raining
    case '39':
      return Raining
    default:
      return Sunny
  }
}

const StyledWeatherTile = styled.div`
    display: flex;
    position: relative;
    height: 190px;
    width: 240px;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0,0,255,0.19), 0 6px 6px rgba(0,255,255,0.23);
    border: 1px solid rgb(0,255,255);
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 15px;
`
const TileDate = styled.div`
    position: relative;
    top: -7px;
    font-family: 'Inconsolata', monospace;
    text-align: center;
    font-weight: bold;
    font-size: 21px;
    color: white;
`

const TileImage = styled.img`
    position: relative;
    top: 6px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 8px;
`

const TempHi = styled.p`

position: relative;
margin: 0px;
top: 5px;
text-align: center;
padding-bottom: 5px;
font-weight: bold;
font-size: 23px;
font-family: 'Inconsolata', monospace;
color: white;
`

const TempLo = styled.p`

position: relative;
top: 10px;
margin: 0px;
text-align: center;
font-size: 19px;
font-family: 'Inconsolata', monospace;
color: white;
`

const WeatherTile = (props) => {
  const {forecast, index} = props
  const todayTmozDate = () => {
    if (index === 0) {
      return 'Today'
    } else if (index === 1) {
      return 'Tomorrow'
    } else {
      return forecast.date
    }
  }

  return (
    <StyledWeatherTile>
      <TileDate>{todayTmozDate()}</TileDate>
      <TileImage src={whichWeatherPic(forecast)} />
      <TempHi>{ Math.round((Number(forecast.high) - 32) * 0.5555) }&deg;C</TempHi>
      <TempLo>{ Math.round((Number(forecast.low) - 32) * 0.5555) }&deg;C</TempLo>
    </StyledWeatherTile>
  )
}

export default WeatherTile
