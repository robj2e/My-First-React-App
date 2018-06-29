import request from 'request-promise'

export const SET_FORM_VALUES = 'SET_FORM_VALUES'
export const setFormValues = (event) => {
  return {
    type: SET_FORM_VALUES,
    payload: event.target.value
  }
}

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
      return resolve(response.query.results.channel.item.forecast)
    } catch (e) {
      console.log(e)
    }
  })
})
