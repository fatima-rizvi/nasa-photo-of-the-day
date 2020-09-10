//neo-header-section div to hold page title
//Import react
import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: ${pr => pr.theme.darkBlue};
    color: ${pr => pr.theme.white};
`

export default function NeoHeader() {

    return (
        <StyledHeader className = 'neo-header-section'>
            <h2>Asteroids Near Earth Today</h2>
        </StyledHeader>
    )
}