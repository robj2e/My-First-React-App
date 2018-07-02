import {SET_FORM_VALUES, RESET_FORM_VALUES} from '../actions'
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
    default:
      return form
  }
}
