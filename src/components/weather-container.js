import React from 'react'
import request from 'request-promise'
import WeatherForm from './weather-form'
import ForecastsList from './ForecastsList'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Loading from '../images/loading.gif'

const ErrorMessage = styled.p`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
`
const LoadingImage = styled.div`
  text-align: center;
  margin-top: 80px;
`

const WeatherContainer = (props) => {
  console.log(props)
  const {forecast, error, pending} = props.weather

  return (
    <div>
      <WeatherForm />
      {pending ? (
        <LoadingImage>
          <img src={Loading} />
        </LoadingImage>
      ) : forecast ? (
        <div>
          <ForecastsList />
        </div>
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </div>
  )
}

const mapStateToProps = (store) => (
  {
    weather: store.weather
  }
)
export default connect(mapStateToProps)(WeatherContainer)
