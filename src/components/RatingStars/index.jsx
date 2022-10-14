import React from 'react';
import {GoStar} from 'react-icons/go'
import styled from 'styled-components'

const RatingStar = ({difficulty}) => {
  const stars = [1, 2, 3]
  return (
    <div>
      {stars.map( s => (
        <Icon 
          key={s}
          isfilled={difficulty.has(s)}
        />
      ))}
    </div>
  )
}

export default RatingStar

const Icon = styled(GoStar)`
  color: ${({isfilled, theme}) => isfilled ? theme.colors.dark : theme.colors.lightDark};
`