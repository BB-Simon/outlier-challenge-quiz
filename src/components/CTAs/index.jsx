import React from 'react';
import styled from 'styled-components'

export const Button = ({title, ...rest}) => {
  return (
    <StyledButton {...rest}>
      {title}
    </StyledButton>
  )
}

export const NextQuestionCTA = ({handleOnClick, ...rest}) => {
  return (
    <Button onClick={handleOnClick} title="Next Question" {...rest} />
  )
}

const StyledButton = styled.button`
  width: 100%;
  background: ${({theme}) => theme.colors.lightGray};
  color: ${({theme}) => theme.colors.dark};
  padding: 8px 12px;
  font-family: ${({theme}) => theme.fontsFamily};
  font-size: ${({theme}) => theme.fontSizes.small};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 5px;
  text-align: center;
  list-style: none;
  cursor: pointer;
`