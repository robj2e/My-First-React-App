import React from 'react'
import styled from 'styled-components'
import WeatherTile from './WeatherTile'

const TitleStyle = styled.h2`
  font-size:25px;
  color: red;
  text-align: center;
  font-family: Tahoma;
`
const TileContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 160px;
`

const ForecastsList = ({forecast}) => (
  <div>
    <div>
      <TitleStyle>10 Day Forecast</TitleStyle>
    </div>
    <TileContainerStyle>
      {forecast.map((f, index) => (
        <WeatherTile forecast={f} />
      ))}
    </TileContainerStyle>
  </div>
)

export default ForecastsList
