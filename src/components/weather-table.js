import React from 'react'
import WeatherTableRow from './weather-table-row'
import WeatherTableData from './weather-table-data'
import styled from 'styled-components'

const Table = styled.table`
    margin-top: 30px;
    text-align: center;
`

export default (props) => {
  const {forecast} = props
  return (
    <Table>
      <thead>
        <WeatherTableRow />
      </thead>
      <WeatherTableData forecast={forecast} />
    </Table>
  )
}
