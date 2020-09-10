// photo-description div to hold info about the daily photo
import React from 'react';

export default function Description(props) {
    const { explanation } = props

    return (
        <div className = 'photo-description'>
            <p>{explanation}</p>
        </div>
    )
}