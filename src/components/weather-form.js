import React from 'react'
import MagGlass from '../images/searchmagnify.png'
import styled from 'styled-components'

const TableHeader = styled.h1`
    text-align:center;
    font-family: Tahoma;
`

const TableHeader2 = styled.h2`
    text-align:center;
    font-family: Tahoma;
    `

const StyledForm = styled.div`
    text-align: center;
`

export default (props) => {
  const {handleSubmit, value, handleChange} = props
  return (
    <StyledForm>
      <TableHeader>Enter a UK City</TableHeader>
      <TableHeader2>Receive a 10 day forecast</TableHeader2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='city' placeholder='Enter City' autoComplete='off' value={value} onChange={handleChange} />
        <button type='submit'>
          <img src={MagGlass} alt='' height='13' align='top' />
        </button>
      </form>
    </StyledForm>
  )
}
