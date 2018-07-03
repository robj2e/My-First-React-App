import {SUBMIT_FORM} from '../actions'

export default (weather = {}, action) => {
  switch (action.type) {
    case `${SUBMIT_FORM}_FULFILLED`:
      return {
        ...weather,
        forecast: action.payload
      }
    default:
      return weather
  }
}
