import React from 'react'
import MagGlass from '../images/searchmagnify.png'
import styled from 'styled-components'

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    form {
      display: flex;
    }
`

const InputField = styled.input`
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:320px;
  text-align: center;
  border:none;
  border-bottom:1px solid #757575;
  color:white;
  background: transparent;
  ::placeholder {
    color: white;
  }
`

const SearchButton = styled.button`
  border-color: white;
  border-width: 0;
  height: 55px;
  width: 28px;
  border-bottom:1px solid #757575;
  background: transparent;
  filter:invert(100%);
  
  :hover {
    cursor:pointer
  }
`

export default (props) => {
  const {handleSubmit, value, handleChange} = props
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <InputField type='text' aria-label='Search Box' name='city' placeholder='Enter City' autoComplete='off' value={value} onChange={handleChange} />
        <SearchButton type='submit' aria-label='Search Button'>
          <img src={MagGlass} alt='' height='13' align='top' />
        </SearchButton>
      </form>
    </StyledForm>
  )
}
