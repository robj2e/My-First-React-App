import {SET_FORM_VALUES, RESET_FORM_VALUES, SET_SEARCHED_CITY} from '../actions'
export default (form = {}, action) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      return {
        ...form,
        city: action.payload

      }
    case RESET_FORM_VALUES:
      return {
        ...form,
        city: ''
      }
    case SET_SEARCHED_CITY:
      return {
        ...form,
        searchedCity: action.payload
      }
    default:
      return form
  }
}
