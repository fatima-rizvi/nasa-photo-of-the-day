//header-section div to hold page title
//Import react
import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: ${pr => pr.theme.darkBlue};
    color: ${pr => pr.theme.white};
`

export default function Header(props) {
    const {photoTitle} = props;

    return (
        <StyledHeader className = 'header-section'>
            <h2>NASA Daily Photo</h2>
            <h3>{photoTitle}</h3>
        </StyledHeader>
    )
}