import React from 'react'
import request from 'request-promise'
import WeatherForm from './weather-form'
import WeatherTable from './weather-table'
import ForecastsList from './ForecastsList'
// import WeatherTableRow from './components/weather-table-row'

class WeatherContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pending: false,
      city: '',
      forecast: null,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({city: event.target.value})
  }

  async onSubmit (event) {
    event.preventDefault()
    this.setState({pending: true})
    this.setState({error: false})

    await request({
      method: 'GET',
      uri: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.city}%2C%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
      json: true
    }).then(response => {
      this.setState({pending: false})
      if (response.query.count > 0) {
        this.setState({forecast: response.query.results.channel.item.forecast})
      } else {
        this.setState({error: 'Request invalid, Please enter a valid city name'})
      }
    }).catch(err => {
      this.setState({pending: false})
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <WeatherForm handleChange={this.handleChange} handleSubmit={this.onSubmit} value={this.state.city} />
        {this.state.forecast ? (
          <div>
            <WeatherTable forecast={this.state.forecast} />
            <ForecastsList forecast={this.state.forecast} />
          </div>
        ) : (
          <p>{this.state.error}</p>
        )}
      </div>
    )
  }
}

export default WeatherContainer
