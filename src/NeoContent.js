//neo-content-section div to hold page title
//Import react
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const WhiteText = styled.div`
    color: ${pr => pr.theme.white};
`

export default function NeoContent(props) {
    const { allAstData, date } = props
    console.log(allAstData);
    // const [asteroids, setAsteroids] = useState(allAstData)
    // console.log(asteroids);
    // const [allNeos, setAllNeos] = useState(asteroids.near_earth_objects) 
    // console.log(allNeos);
    // console.log(Object.getOwnPropertyNames(allNeos));

    return (
        <WhiteText className = 'neo-content-section'>
            <h4>Number of Nearby Asteroids: {allAstData.element_count}</h4>

        </WhiteText>
    )
}