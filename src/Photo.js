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
const StyledPhotoSec = styled.div`
    background-color: ${pr => pr.theme.grey};
    color: ${pr => pr.theme.white};
`

export default function Photo(props) {
    const { photoUrl, copyRight, date } = props

    return (
        <StyledPhotoSec className = 'main-photo'>
            <StyledImg src={photoUrl} alt="NASA's Daily Photo"/>
            <h6>Copyright: {copyRight}</h6>
            <h6>Date: {date}</h6>
        </StyledPhotoSec>
    )
}