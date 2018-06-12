import React from 'react'

export default ({ forecast }) => {
  return (
    <tbody>
      {forecast.map((forecast, index) => (
        <tr key={index}>
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
