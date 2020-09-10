//neo-content-section div to hold page title
//Import react
import React, { useState, useEffect } from 'react';

export default function NeoContent(props) {
    const { allAstData, startDate } = props
    console.log(allAstData);
    // const [asteroids, setAsteroids] = useState(allAstData)
    // console.log(asteroids);
    // const [allNeos, setAllNeos] = useState(asteroids.near_earth_objects) 
    // console.log(allNeos);
    // console.log(Object.getOwnPropertyNames(allNeos));

    return (
        <div className = 'neo-content-section'>
            <h4>Number of Nearby Asteroids: {allAstData.element_count}</h4>

        </div>
    )
}