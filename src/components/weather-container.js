import React from 'react'
import request from 'request-promise'
import WeatherForm from './weather-form'
import ForecastsList from './ForecastsList'
import styled from 'styled-components'

const ErrorMessage = styled.p`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
`
class WeatherContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pending: false,
      city: '',
      searchedCity: '',
      forecast: null,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({city: event.target.value})
  }

  async onSubmit (event) {
    event.preventDefault()
    this.setState({
      pending: true,
      error: false,
      forecast: null
    })
    await request({
      method: 'GET',
      uri: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.city}%2C%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
      json: true
    }).then(response => {
      this.setState({
        pending: false,
        searchedCity: this.state.city
      })

      response.query.count > 0 ? this.setState({forecast: response.query.results.channel.item.forecast})
        : this.setState({error: 'Request invalid, Please enter a valid city name'})
    }).catch(err => {
      this.setState({pending: false, error: err})
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <WeatherForm handleChange={this.handleChange} handleSubmit={this.onSubmit} value={this.state.city} />
        {this.state.forecast ? (
          <div>
            <ForecastsList forecast={this.state.forecast} searchedCity={this.state.searchedCity} />
          </div>
        ) : (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        )}
      </div>
    )
  }
}

export default WeatherContainer
