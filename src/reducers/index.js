import React from 'react'
import { combineReducers } from 'redux'
import weather from './weather'
import form from './form'

const allReducers = combineReducers({
  weather: weather,
  form: form
})

export default allReducers
