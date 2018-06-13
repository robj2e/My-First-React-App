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
position: relative;
    background:lightgrey;
    height: 150px;
    border-style: solid;
    border-width: 2px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: flex-start;
    border-radius: 5px;
`
const TileDate = styled.div`
    position: relative;
    top: -3px;
    font-family: 'Muli', sans-serif;
    text-align: center;
    font-weight: bold;
`

const TileImage = styled.img`
    position: relative;
    top: 6px;
    height 50px;
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
font-size: 21px;
font-family: Tahoma;
`

const TempLo = styled.p`

position: relative;
top: 4px;
margin: 0px;
text-align: center;
font-size: 16px;
font-family: Tahoma;
`

const WeatherTile = (props) => {
  const {forecast, index} = props
  console.log(props)
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
      {/* <TileDate>{forecast.date}</TileDate> */}
      <TileDate>{todayTmozDate()}</TileDate>
      <TileImage src={whichWeatherPic(forecast)} />
      <TempHi>{ Math.round((Number(forecast.high) - 32) * 0.5555) }&deg;C</TempHi>
      <TempLo>{ Math.round((Number(forecast.low) - 32) * 0.5555) }&deg;C</TempLo>
    </StyledWeatherTile>
  )
}

export default WeatherTile
