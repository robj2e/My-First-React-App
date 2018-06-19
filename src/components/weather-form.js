import React from 'react'
import MagGlass from '../images/searchmagnify.png'
import styled from 'styled-components'

const StyledForm = styled.div`
    text-align: center;
`

export default (props) => {
  const {handleSubmit, value, handleChange} = props
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <input type='text' aria-label='Search Box' name='city' placeholder='Enter City' autoComplete='off' value={value} onChange={handleChange} />
        <button type='submit' aria-label='Search Button'>
          <img src={MagGlass} alt='' height='13' align='top' />
        </button>
      </form>
    </StyledForm>
  )
}
