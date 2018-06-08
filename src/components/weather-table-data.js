import React from 'react'

export default ({ weatherdata }) => {
  return (
    <tbody>
      {weatherdata.forecast.map(forecast => (
        <tr>
          <td>{ forecast.day }</td>
          <td>{ forecast.date }</td>
          <td>{ forecast.high }</td>
          <td>{ forecast.low }</td>
          <td>{ Math.round((Number(forecast.high) - 32) * 0.5555) }</td>
          <td>{ Math.round((Number(forecast.low) - 32) * 0.5555) }</td>
          <td>{ forecast.text }</td>
        </tr>
      ))}
    </tbody>
  )
}
