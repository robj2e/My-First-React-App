import React from 'react'

// class WeatherForm extends React.Component {
//   constructor (props) {
//     super(props)
//     console.log(props)
//   }

//   render () {
//     return (
//       <div>
//         <input type='text' name='city' value={this.props.value} onChange={this.props.handleChange} />
//         <button type='button' onClick={this.props.handleClick}>Fetch Weather</button>
//       </div>
//     )
//   }
// }

export default (props) => {
  return (
    <div>
      <input type='text' name='city' value={props.value} onChange={props.handleChange} />
      <button type='button' onClick={props.handleClick}>Fetch Weather</button>
    </div>
  )
}
