import React from 'react'
import request from 'request-promise'
import WeatherForm from './weather-form'
import WeatherTable from './weather-table'
// import WeatherTableRow from './components/weather-table-row'

class WeatherContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pending: false,
      city: '',
      weatherdata: null,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({city: event.target.value})
  }

  async onClick () {
    this.setState({pending: true})
    this.setState({error: false})

    const response = await request({
      method: 'GET',
      uri: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${this.state.city}%2C%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
      json: true
    }).then(this.setState({pending: false}))

    if (response.query.count > 0) {
      this.setState({weatherdata: response.query.results.channel.item})
      console.log(this.state.weatherdata)
    } else {
      this.setState({error: 'Please enter a valid city'})
    }
  }

  render () {
    return (
      <div>
        <WeatherForm handleChange={this.handleChange} handleClick={this.onClick} value={this.state.city} />
        {this.state.weatherdata ? (
          <WeatherTable weatherdata={this.state.weatherdata} />
        ) : (
          <p>{this.state.error}</p>
        )}
      </div>
    )
  }
}

export default WeatherContainer
