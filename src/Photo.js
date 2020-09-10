// main-photo div to hold main photo
import React from 'react';

export default function Photo(props) {
    const {photoUrl} = props

    return (
        <div className = 'main-photo'>
            <img src={photoUrl} alt="NASA's Daily Photo"/>
        </div>
    )
}