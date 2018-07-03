import request from 'request-promise'

export const SET_FORM_VALUES = 'SET_FORM_VALUES'
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES'

export const setFormValues = (event) => {
  return {
    type: SET_FORM_VALUES,
    payload: event.target.value
  }
}

export const resetFormValues = () => ({
  type: RESET_FORM_VALUES
})

export const SUBMIT_FORM = 'SUBMIT_FORM'
export const submitForm = () => (dispatch, getState) => dispatch({
  type: SUBMIT_FORM,
  payload: new Promise(async (resolve, reject) => {
    try {
      const city = getState().form.city
      const response = await request({
        method: 'GET',
        uri: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
        json: true
      })
      dispatch(setSearchedCity(city))
      if (response.query.count > 0) {
        return resolve(response.query.results.channel.item.forecast)
      } else {
        throw new Error('Invalid Request, please enter a valid destination')
      }
    } catch (e) {
      return reject(e.message)
    }
  })
})

export const SET_SEARCHED_CITY = 'SET_SEARCHED_CITY'
export const setSearchedCity = (city) => {
  return {
    type: SET_SEARCHED_CITY,
    payload: city
  }
}
