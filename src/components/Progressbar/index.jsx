import React from 'react';
import styled from  'styled-components'

const Progressbar = ({
  percentage = 100, 
  xHeight = 12, 
  children,
  ...rest
}) => {
  return (
    <ProgressbarWrapper percentage={percentage} xHeight={xHeight} {...rest}>
      {children}
    </ProgressbarWrapper>
  )
}

export default Progressbar;

export const ScoreProgressbar = ({score, minScore, maxScore}) => {
  return (
    <div>
      <Score>
        <span>Score {score}%</span>
        <span>Max Score {maxScore}%</span>
      </Score>
      <ScoreProgressbarWrapper>
        <MinScore title={`min score ${minScore} %`} percentage={minScore} />
        <Progressbar 
          title={`score ${score}%`} 
          percentage={score} 
          xHeight={23}
        />
        <MaxScore title={`max score ${maxScore}%`} percentage={maxScore} />
      </ScoreProgressbarWrapper>
    </div>
  )
}

const ProgressbarWrapper = styled.div`
  width: ${({percentage}) => `${percentage}%`};
  height: ${({xHeight}) => `${xHeight}px`};
  background: ${({theme}) => theme.colors.gray};
`
const ScoreProgressbarWrapper = styled.div`
  width: 100%;
  height: 24px;
  background: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 5px;
  position: relative;
`
const MinScore = styled.div`
  width: ${({percentage}) => `${percentage}%`};
  height: 24px;
  background: ${({theme}) => theme.colors.dark};
  position: absolute;
  top: 0;
  left: 0;
`
const MaxScore = styled.div`
  width: ${props => `${props.percentage}%`};
  height: 24px;
  background: ${({theme}) => theme.colors.lightGray};
  position: absolute;
  top: 0;
  left: 0;
`
const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`