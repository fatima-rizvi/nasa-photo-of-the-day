// main-photo div to hold main photo
import React from 'react';

export default function Photo(props) {
    const { photoUrl, copyRight, date } = props

    return (
        <div className = 'main-photo'>
            <img src={photoUrl} alt="NASA's Daily Photo"/>
            <h6>Copyright: {copyRight}</h6>
            <h6>Date: {date}</h6>
        </div>
    )
}