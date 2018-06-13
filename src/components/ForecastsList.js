import React from 'react'
import styled from 'styled-components'
import WeatherTile from './WeatherTile'

const TitleStyle = styled.h2`
  font-size:25px;
  color: black;
  text-align: center;
  font-family: Tahoma;
  margin-top:45px;
`
const TileContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 160px;
  
`
const cityCapitalised = (cityname) => {
  return cityname.charAt(0).toUpperCase() + cityname.slice(1)
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
