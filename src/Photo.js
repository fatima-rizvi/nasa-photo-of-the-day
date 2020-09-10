// main-photo div to hold main photo
import React from 'react';
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    25% {
        transform: scale(0.8)
    }
    50%{
        transform: scale(1.2)
    }
    100%{
        transform: scale(1.05)
    }
`

const StyledImg = styled.img`
  border: 10px solid ${pr => pr.theme.borderColor};
  &:hover{
        animation: ${kf} 1s forwards;
    }
`

const StyledDetails = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function Photo(props) {
    const { photoUrl, copyRight, date } = props

    return (
        <div className = 'main-photo'>
            <StyledImg src={photoUrl} alt="NASA's Daily Photo"/>
            <StyledDetails className = 'photo-details'>
                <h6>Copyright: {copyRight}</h6>
                <h6>Date: {date}</h6>
            </StyledDetails>
        </div>
    )
}