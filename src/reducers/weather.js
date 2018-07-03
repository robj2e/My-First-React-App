import {SUBMIT_FORM, SET_WEATHER_ERROR} from '../actions'

export default (weather = {}, action) => {
  switch (action.type) {
    case `${SUBMIT_FORM}_FULFILLED`:
      return {
        ...weather,
        forecast: action.payload,
        pending: false
      }
    case `${SUBMIT_FORM}_PENDING`:
      return {
        ...weather,
        pending: true,
        forecast: null
      }
    case `${SUBMIT_FORM}_REJECTED`:
      return {
        ...weather,
        error: action.payload,
        pending: false
      }
    default:
      return weather
  }
}
