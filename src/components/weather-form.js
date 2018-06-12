import React from 'react'
import MagGlass from '../images/searchmagnify.png'

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
      <h1>Enter a UK City</h1>
      <form onSubmit={props.handleSubmit}>
        <input type='text' name='city' placeholder='Enter City' value={props.value} onChange={props.handleChange} />
        <button type='submit'>
          <img src={MagGlass} alt='' height='13' align='top' />
        </button>
      </form>
    </div>
  )
}
