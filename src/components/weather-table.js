import React from 'react'
import WeatherTableRow from './weather-table-row'
import WeatherTableData from './weather-table-data'

// class WeatherTable extends React.Component {
//   render () {

//   }
// }

export default ({forecast}) => {
  return (
    <table>
      <thead>
        <WeatherTableRow />
      </thead>
      <WeatherTableData forecast={forecast} />
    </table>
  )
}
