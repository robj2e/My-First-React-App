import React from 'react'
import { combineReducers } from 'redux'
import weather from './weather'
import form from './form'

const allReducers = combineReducers({
  weather,
  form
})

export default allReducers
